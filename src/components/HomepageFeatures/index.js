import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '超低延迟音频',
    Svg: require('@site/static/img/sound-waveform.svg').default,
    description: (
      <>
        得益于WASAPI独占、ASIO的支持，ATRIAS可以做到极低延迟的音频输出。
      </>
    ),
  },
  {
    title: '多样化游戏体验',
    Svg: require('@site/static/img/game.svg').default,
    description: (
      <>
        速度、AR、缩圈渐入、物件参数均可自定义，更多奇妙的游戏体验。
      </>
    ),
  },
  {
    title: '良好的网络连接质量',
    Svg: require('@site/static/img/network.svg').default,
    description: (
      <>
        位于中国大陆的服务器可以为大陆玩家提供流畅的连接
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
