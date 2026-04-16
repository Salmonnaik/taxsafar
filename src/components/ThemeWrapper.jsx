import { useTheme } from '../contexts/ThemeContext';
import BubbleEffect from './BubbleEffect';
import BackgroundBubbles from './BackgroundBubbles';

export default function ThemeWrapper({ children }) {
  const { bubbleTrigger } = useTheme();
  
  return (
    <>
      <BackgroundBubbles />
      <BubbleEffect trigger={bubbleTrigger} />
      {children}
    </>
  );
}
