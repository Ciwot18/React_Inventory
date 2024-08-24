const images = [
    { "href": "https://img.icons8.com/ios-filled/50/road-worker.png", "title": "Lavoro" },
    { "href": "https://img.icons8.com/ios/50/hamburger.png", "title": "Cibo" },
    { "href": "https://img.icons8.com/ios/50/full-tool-storage-box-.png", "title": "Attrezzi" },
    { "href": "https://img.icons8.com/ios/50/education.png", "title": "Educazione" },
    { "href": "https://img.icons8.com/ios/50/dress-front-view.png", "title": "Vestiti" },
    { "href": "https://img.icons8.com/wired/64/multiple-devices.png", "title": "Tecnologia" },
    { "href": "https://img.icons8.com/ios/50/where-what-quest.png", "title": "Generico" }
];

const getImageURLs = () => {
    return images;
}

const getImageUrlByTitle = (title) => {
    const image = images.find(image => image.title === title);
    return image.href;
}

export { getImageURLs, getImageUrlByTitle };