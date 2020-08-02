import React from 'react';
import Hero from './hero'
import Hero2 from './hero2'
// import TeamGallery from './teamGallery'

const SliceZone = ({ body }) => {
  console.log(body);
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === 'hero') {
          return (
            <Hero
              backgroundImage={bodyContent.primary.background_image.url}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              key={i} />
          )
        }
        if (bodyContent.type === 'hero_2') {
          return (
            <Hero2
              backgroundImage={bodyContent.primary.hero_2_image.url}
              title={bodyContent.primary.hero_caption}
              key={i} />
          )
        }
        // if (bodyContent.type === 'image_gallery') {
        //   return (
        //     <TeamGallery
        //       backgroundImage={bodyContent.fields.gallery_image.url}
        //       title={bodyContent.primary.image_captions}
        //       key={i} />
        //   )
        // }
        else {
          return null;
        }
      })}
    </div>
  )
}

export default SliceZone;