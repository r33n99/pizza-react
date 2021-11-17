import React from 'react'
import ContentLoader from 'react-content-loader'

function LoadingBlock() {
    return (
        <div>
           <ContentLoader
           className="pizza-block"
          speed={2}
          width={310}
          height={457}
          viewBox="0 0 280 457"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="306" rx="0" ry="0" width="280" height="84" />
          <rect x="0" y="420" rx="0" ry="0" width="90" height="27" />
          <rect x="129" y="409" rx="28" ry="28" width="150" height="44" />
          <circle cx="130" cy="125" r="125" />
          <rect x="0" y="259" rx="0" ry="0" width="280" height="24" />
        </ContentLoader> 
        </div>
    )
}

export default LoadingBlock
