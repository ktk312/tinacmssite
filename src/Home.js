import React from 'react';
import { useForm, usePlugin, useCMS } from 'tinacms';
import { imagesBlock } from './components/Images';
import { featureListBlock } from './components/FeatureList';
import { videoBlock} from './components/Video';
import { imagesoppositeBlock } from './components/Imageopposite';
import { InlineForm, InlineBlocks } from 'react-tinacms-inline';
import { heroBlock } from './components/Hero';
import data from './data/data.json';
import { formBlock } from './components/form1';
import { form2Block } from './components/form2';
import { careerSectionBlock } from './components/careerSection';
import { topnavBlock } from './components/topNav';
import { footerBlock } from './components/footer';

export default function Home() {
  const cms = useCMS();
  const formConfig = {
    id: './data/data.json',
    initialValues: data,
    onSubmit() {
      cms.alerts.success('Saved!');
    },
  };

  const [, form] = useForm(formConfig);

  usePlugin(form);

  return (
    <div className='home'>
      <InlineForm form={form} initialStatus='active'>
        <InlineBlocks name='blocks' blocks={HOME_BLOCKS} />
      </InlineForm>
    </div>
  );
}

const HOME_BLOCKS = {
  topnav: topnavBlock,
  hero: heroBlock,
  images: imagesBlock,
  video: videoBlock,
  images1 : imagesBlock,
  imageopposite: imagesoppositeBlock,
  features: featureListBlock,
  section4: imagesBlock,
  form1: formBlock,
  section6: careerSectionBlock,
  form2: form2Block,
  footer: footerBlock
};
