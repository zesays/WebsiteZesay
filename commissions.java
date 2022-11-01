
const slidegallery = CommissionsZ.queryelector('.slides');
const slides = slidegallery.queryelector('.div');
const thumbnailcontainer = CommissionsZ.queryelector('.thumbnails');
const slidecount = slides.length;
const slidewidth = 540;

const highlightthumbnail = () => {
    thumbnailcontainer
    .queryelectorall('div.highlighted')
    .foreach(el => el.classlist.remove('highlighted'));
    const index = Math.floor(slidegallery.scrollLeft / slideWidth);
    thumbnailcontainer
    .queryelector('div[data-id="${index}"]')
    .classlist.add('highlighted');
};

thumbnailcontainer.innerHTML += [...slides]
.map((slide, 1) => '<div data-id="${i}"></div>')
.join('');

thumbnailContainer.queryelectorAll(''div).forEach(el => {
    el.addEventListener('click', () +> scrollElement(el));
});

slideGallery.addEventListener(''scroll, e => highlightthumbnail());
highlightedThumbnail();

