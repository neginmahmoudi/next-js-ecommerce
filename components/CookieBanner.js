import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const bannerStyles = (isOpen) => css`
  padding: 5px;
  transition: all 0.5s ease-in-out;
  height: 20px;
  ${!isOpen &&
  css`
    height: 0;
    padding: 0;
    overflow: hidden;
  `};
`;
export default function CookieBanner() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  useEffect(() => {
    const initialValue = getLocalStorage('isBannerOpen');
    if (initialValue !== null) {
      setIsBannerOpen(JSON.parse(initialValue));
    }
  }, []);
  return (
    <div css={bannerStyles(isBannerOpen)}>
      {JSON.stringify(isBannerOpen)}
      <span>Please accept cookies</span>
      <button
        onClick={() => {
          setIsBannerOpen(false);
          setLocalStorage('isBannerOpen', false);
        }}
      >
        yes
      </button>
    </div>
  );
}
