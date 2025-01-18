
// 视频封面图片列表
const thumbnails = [
    "video1.jpg",
    "video2.jpg",
    "video3.jpg",
  ];
  
  // 获取 DOM 元素
  const thumbnailImg = document.querySelector(".thumbnail-img");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  
  // 当前封面索引
  let currentIndex = 0;
  
  // 切换封面函数
  function updateThumbnail(index) {
    thumbnailImg.src = thumbnails[index];
  }
  
  // 上一张
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateThumbnail(currentIndex);
  });
  
  // 下一张
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateThumbnail(currentIndex);
  });