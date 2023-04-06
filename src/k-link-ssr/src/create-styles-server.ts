import { EmotionCache } from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { defaultMantineEmotionCache } from '@k-link/styles';

export function createStylesServer(cache?: EmotionCache) {
  return createEmotionServer(cache || defaultMantineEmotionCache);
}
