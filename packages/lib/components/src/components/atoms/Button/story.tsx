import React from 'react';
import { storiesOf } from '@storybook/react'
import { Button } from '.';
import { Variants } from './types'
import { withInfo } from '@storybook/addon-info'
import Marked from 'storybook-readme/components/Marked'
import HEADER from './markdown/HEADER.md';
import VARIANTS_HEADER from './markdown/VARIANTS_HEADER.md';

const { keys } = Object;

const story = storiesOf('Atoms/Button', module);

const typings = story.addDecorator(withInfo({ header: false }));

story.add('Documentation', () => (
  <div style={{ padding: '20px' }}>
    <Marked md={HEADER} />
    <Marked md={'<br />'} />
    <Marked md={VARIANTS_HEADER}/>
    <Marked md={'<br />'} />
    <Marked md={'### Primary'}/>
    <Marked md={'<br />'} />
    <Button variant={Variants.PRIMARY}>Primary</Button>
    <Marked md={'<br />'} />
    <Marked md={'### Secondary'}/>
    <Marked md={'<br />'} />
    <Button variant={Variants.SECONDARY}>Secondary</Button>
    <Marked md={'<br />'} />
    <Marked md={'### Success'}/>
    <Marked md={'<br />'} />
    <Button variant={Variants.SUCCESS}>Success</Button>
    <Marked md={'<br />'} />
    <Marked md={'### Info'}/>
    <Marked md={'<br />'} />
    <Button variant={Variants.INFO}>Info</Button>
    <Marked md={'<br />'} />
    <Marked md={'### Warning'}/>
    <Marked md={'<br />'} />
    <Button variant={Variants.WARNING}>Warning</Button>
    <Marked md={'<br />'} />
    <Marked md={'### Danger'}/>
    <Marked md={'<br />'} />
    <Button variant={Variants.DANGER}>Danger</Button>
    <Marked md={'<br />'} />
    <Marked md={'### Link'}/>
    <Marked md={'<br />'} />
    <Button variant={Variants.LINK}>Link</Button>
    <Marked md={'<br />'} />
  </div>
));

keys(Variants).forEach((key: string) => {
  typings.add(Variants[key], () => {
    const props = {
      children: 'Click me!',
      variant: Variants[key],
    };
    return <Button {...props} />
  })
});
