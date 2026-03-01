export enum Emotion {
  Happy = 'happy',
  Sad = 'sad',
  Angry = 'angry',
  Think = 'think',
  Surprise = 'surprised',
  Awkward = 'awkward',
  Question = 'question',
  Curious = 'curious',
  Neutral = 'neutral',
}

export const EMOTION_VALUES = Object.values(Emotion)

export const EmotionHappyMotionName = 'Flick'
export const EmotionSadMotionName = 'FlickDown'
export const EmotionAngryMotionName = 'Tap'
export const EmotionAwkwardMotionName = 'FlickDown'
export const EmotionThinkMotionName = 'Idle'
export const EmotionSurpriseMotionName = 'FlickUp'
export const EmotionQuestionMotionName = 'FlickUp'
export const EmotionNeutralMotionName = 'Idle'
export const EmotionCuriousMotionName = 'Flick'

export const EMOTION_EmotionMotionName_value = {
  [Emotion.Happy]: EmotionHappyMotionName,
  [Emotion.Sad]: EmotionSadMotionName,
  [Emotion.Angry]: EmotionAngryMotionName,
  [Emotion.Think]: EmotionThinkMotionName,
  [Emotion.Surprise]: EmotionSurpriseMotionName,
  [Emotion.Awkward]: EmotionAwkwardMotionName,
  [Emotion.Question]: EmotionQuestionMotionName,
  [Emotion.Neutral]: EmotionNeutralMotionName,
  [Emotion.Curious]: EmotionCuriousMotionName,
}

export const EMOTION_VRMExpressionName_value = {
  [Emotion.Happy]: 'happy',
  [Emotion.Sad]: 'sad',
  [Emotion.Angry]: 'angry',
  [Emotion.Think]: 'think',
  [Emotion.Surprise]: 'surprised',
  [Emotion.Awkward]: undefined,
  [Emotion.Question]: undefined,
  [Emotion.Neutral]: undefined,
  [Emotion.Curious]: 'think',
} satisfies Record<Emotion, string | undefined>

export interface EmotionPayload {
  name: Emotion
  intensity: number
  /** Optional direct motion group override — bypasses the emotion-to-motion mapping */
  motion?: string
}
