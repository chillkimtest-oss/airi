import { createOpenAI } from '@xsai-ext/providers/create'
import { z } from 'zod'

import { createOpenAICompatibleValidators } from '../../validators/openai-compatible'
import { defineProvider } from '../registry'

const openClawConfigSchema = z.object({
  apiKey: z
    .string('Auth Token')
    .optional(),
  baseUrl: z
    .string('Gateway URL')
    .optional()
    .default('http://localhost:3000/v1'),
})

type OpenClawConfig = z.input<typeof openClawConfigSchema>

export const providerOpenClaw = defineProvider<OpenClawConfig>({
  id: 'openclaw',
  name: 'OpenClaw',
  nameLocalize: ({ t }) => t('settings.pages.providers.provider.openclaw.title'),
  description: 'Self-hosted OpenClaw gateway (OpenAI-compatible).',
  descriptionLocalize: ({ t }) => t('settings.pages.providers.provider.openclaw.description'),
  tasks: ['chat'],
  icon: 'i-ph:plugs-connected',

  createProviderConfig: ({ t }) => openClawConfigSchema.extend({
    apiKey: openClawConfigSchema.shape.apiKey.meta({
      labelLocalized: t('settings.pages.providers.catalog.edit.config.common.fields.field.api-key.label'),
      descriptionLocalized: t('settings.pages.providers.catalog.edit.config.common.fields.field.api-key.description'),
      placeholderLocalized: t('settings.pages.providers.catalog.edit.config.common.fields.field.api-key.placeholder'),
      type: 'password',
    }),
    baseUrl: openClawConfigSchema.shape.baseUrl.meta({
      labelLocalized: t('settings.pages.providers.catalog.edit.config.common.fields.field.base-url.label'),
      descriptionLocalized: t('settings.pages.providers.catalog.edit.config.common.fields.field.base-url.description'),
      placeholderLocalized: t('settings.pages.providers.catalog.edit.config.common.fields.field.base-url.placeholder'),
    }),
  }),
  createProvider(config) {
    return createOpenAI(config.apiKey || '', config.baseUrl)
  },

  validationRequiredWhen: () => true,
  validators: {
    ...createOpenAICompatibleValidators({
      checks: ['connectivity', 'chat_completions'],
    }),
  },
})
