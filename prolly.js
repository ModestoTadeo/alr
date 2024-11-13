import { WagmiConfig } from 'wagmi';
import { SuperfluidWidget } from '@superfluid-finance/widget';

export function MyComponent() {
    const widgetData = require('./widget(2).json'); // Load JSON data
  
    return (
      <WagmiConfig config={wagmiConfig}>
        <SuperfluidWidget {...widgetData} type="dialog">
          {({ openModal }) => (
            <button onClick={() => openModal()}>Open Superfluid Widget</button>
          )}
        </SuperfluidWidget>
      </WagmiConfig>
    );
  }