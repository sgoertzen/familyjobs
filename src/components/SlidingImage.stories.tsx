
import React from 'react';
import { storiesOf } from '@storybook/react';
import { SlidingImage, SlideFrom }  from './SlidingImage';

storiesOf('SlidingImage', module)
    .add('Slide from right', () => {
        return <SlidingImage src="images/Darwin_laying.png" from={SlideFrom.FromRight} width={373} height={241}/>
    })
    .add('Slide from right, tall image', () => {
        return <SlidingImage src="images/Darwin_with_shirt.png" from={SlideFrom.FromRight} width={247} height={489}/>
    })
    .add('Slide from below', () => {
        return <SlidingImage src="images/Darwin_with_shirt.png" from={SlideFrom.FromBottom} width={247} height={489}/>
    })
    .add('Slide from above', () => {
        return <SlidingImage src="images/Darwin_looking_cool.png" from={SlideFrom.FromTop} width={577} height={433}/>
    })