hexo.extend.filter.register('before_post_render', function (data) {
  data.content = data.content.replace(
    /!\[(.*?)\]\((.*?)\)\((.*?)\)/g,
    (match, altText, imageSrc, videoSrc) => `
<figure style="text-align: center; color:#0003">
  <div
    data-live-photo
    data-photo-src="${imageSrc}"
    data-video-src="${videoSrc}"
    style="width: 320px; height: 320px; margin: 0 auto; overflow: hidden;">
  </div>
  <figcaption stlye="margin-top: 4px;">${altText}</figcaption>
</figure>
`
  );
  return data;
});