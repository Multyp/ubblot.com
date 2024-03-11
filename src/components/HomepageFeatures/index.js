import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The knowledge is here',
    Svg: require('@site/static/img/undraw_knowledge_re_5v9l.svg').default,
    description: (
      <>
        Ubblot was designed from the ground up to be a hub of technical
        knowledge and to help studying, learning and working from begginers
        to more advanced developers.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_dev_focus_re_6iwt.svg').default,
    description: (
      <>
        Ubblot lets you focus on your work by centralizing knowledge. No
        more need to search for hours, we have everything here and, if not,
        just ask for it to be added !
      </>
    ),
  },
  {
    title: 'Now get to work !',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        Learning programming is reading docs and trial and error. Focus on
        your work and feel to ask if you cannot find the solution to your
        problem. Teamwork is the key to success !
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
        <Heading as="h3">{title}</Heading>
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
