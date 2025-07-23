hexo.extend.tag.register('live', function (args) {
    const [altText = '', imageSrc, videoSrc] = args;
  
    return `
  <figure style="text-align: center; color: #0003;">
    <div
      data-live-photo
      data-photo-src="${imageSrc}"
      data-video-src="${videoSrc}"
      style="width: 320px; height: 320px; margin: 0 auto; overflow: hidden;">
    </div>
    <figcaption style="margin-top: 4px;">${altText}</figcaption>  <!-- 显示描述 -->
  </figure>
    `;
  }, { ends: false });