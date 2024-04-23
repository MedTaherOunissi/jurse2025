// Array containing all the image URLs
const allImages = [
    "images/photo-gallery/jurse2023-photo-00001.png",
    "images/photo-gallery/jurse2023-photo-00002.png",
    "images/photo-gallery/jurse2023-photo-00003.png",
    "images/photo-gallery/jurse2023-photo-00004.png",
    "images/photo-gallery/jurse2023-photo-00005.png",
    "images/photo-gallery/jurse2023-photo-00008.png",
    "images/photo-gallery/jurse2023-photo-00009.png",
    "images/photo-gallery/jurse2023-photo-00011.png",
    "images/photo-gallery/jurse2023-photo-00012.png",
    "images/photo-gallery/jurse2023-photo-00013.png",
    "images/photo-gallery/jurse2023-photo-00014.png",
    "images/photo-gallery/jurse2023-photo-00016.png",
    "images/photo-gallery/jurse2023-photo-00028.png",
    "images/photo-gallery/jurse2023-photo-00006.png",
    "images/photo-gallery/jurse2023-photo-00007.png",
    "images/photo-gallery/jurse2023-photo-00010.png",
    "images/photo-gallery/jurse2023-photo-00018.png",
    "images/photo-gallery/jurse2023-photo-00024.png",
    "images/photo-gallery/jurse2023-photo-00019.png",
    "images/photo-gallery/jurse2023-photo-00020.png",
    "images/photo-gallery/jurse2023-photo-00021.png",
    "images/photo-gallery/jurse2023-photo-00022.png",
    "images/photo-gallery/jurse2023-photo-00023.png",
    "images/photo-gallery/jurse2023-photo-00015.png",
    "images/photo-gallery/jurse2023-photo-00025.png",
    "images/photo-gallery/jurse2023-photo-00026.png",
    "images/photo-gallery/jurse2023-photo-00027.png",
    "images/photo-gallery/jurse2023-photo-00017.png",
    "images/photo-gallery/jurse2023-photo-00029.png",
    "images/photo-gallery/jurse2023-photo-00030.png",
    "images/photo-gallery/jurse2023-photo-00040.png",
    "images/photo-gallery/jurse2023-photo-00032.png",
    "images/photo-gallery/jurse2023-photo-00047.png",
    "images/photo-gallery/jurse2023-photo-00053.png",
    "images/photo-gallery/jurse2023-photo-00054.png",
    "images/photo-gallery/jurse2023-photo-00057.png",
    "images/photo-gallery/jurse2023-photo-00037.png",
    "images/photo-gallery/jurse2023-photo-00038.png",
    "images/photo-gallery/jurse2023-photo-00039.png",
    "images/photo-gallery/jurse2023-photo-00031.png",
    "images/photo-gallery/jurse2023-photo-00041.png",
    "images/photo-gallery/jurse2023-photo-00042.png",
    "images/photo-gallery/jurse2023-photo-00043.png",
    "images/photo-gallery/jurse2023-photo-00044.png",
    "images/photo-gallery/jurse2023-photo-00045.png",
    "images/photo-gallery/jurse2023-photo-00046.png",
    "images/photo-gallery/jurse2023-photo-00033.png",
    "images/photo-gallery/jurse2023-photo-00048.png",
    "images/photo-gallery/jurse2023-photo-00049.png",
    "images/photo-gallery/jurse2023-photo-00050.png",
    "images/photo-gallery/jurse2023-photo-00052.png",
    "images/photo-gallery/jurse2023-photo-00034.png",
    "images/photo-gallery/jurse2023-photo-00035.png",
    "images/photo-gallery/jurse2023-photo-00055.png",
    "images/photo-gallery/jurse2023-photo-00056.png",
    "images/photo-gallery/jurse2023-photo-00036.png",
    "images/photo-gallery/jurse2023-photo-00058.png",
    "images/photo-gallery/jurse2023-photo-00059.png",
    "images/photo-gallery/jurse2023-photo-00067.png",
    "images/photo-gallery/jurse2023-photo-00061.png",
    "images/photo-gallery/jurse2023-photo-00062.png",
    "images/photo-gallery/jurse2023-photo-00063.png",
    "images/photo-gallery/jurse2023-photo-00064.png",
    "images/photo-gallery/jurse2023-photo-00065.png",
    "images/photo-gallery/jurse2023-photo-00068.png",
    "images/photo-gallery/jurse2023-photo-00069.png",
    "images/photo-gallery/jurse2023-photo-00070.png",
    "images/photo-gallery/jurse2023-photo-00071.png",
    "images/photo-gallery/jurse2023-photo-00072.png",
    "images/photo-gallery/jurse2023-photo-00073.png",
    "images/photo-gallery/jurse2023-photo-00074.png",
    "images/photo-gallery/jurse2023-photo-00075.png",
    "images/photo-gallery/jurse2023-photo-00076.png",
    "images/photo-gallery/jurse2023-photo-00077.png",
    "images/photo-gallery/jurse2023-photo-00078.png",
    "images/photo-gallery/jurse2023-photo-00079.png",
    "images/photo-gallery/jurse2023-photo-00080.png",
    "images/photo-gallery/jurse2023-photo-00081.png",
    "images/photo-gallery/jurse2023-photo-00082.png",
    "images/photo-gallery/jurse2023-photo-00083.png",
    "images/photo-gallery/jurse2023-photo-00084.png",
    "images/photo-gallery/jurse2023-photo-00085.png",
    "images/photo-gallery/jurse2023-photo-00086.png",
    "images/photo-gallery/jurse2023-photo-00087.png",
    "images/photo-gallery/jurse2023-photo-00088.png",
    "images/photo-gallery/jurse2023-photo-00105.png",
    "images/photo-gallery/jurse2023-photo-00089.png",
    "images/photo-gallery/jurse2023-photo-00090.png",
    "images/photo-gallery/jurse2023-photo-00091.png",
    "images/photo-gallery/jurse2023-photo-00092.png",
    "images/photo-gallery/jurse2023-photo-00093.png",
    "images/photo-gallery/jurse2023-photo-00094.png",
    "images/photo-gallery/jurse2023-photo-00095.png",
    "images/photo-gallery/jurse2023-photo-00096.png",
    "images/photo-gallery/jurse2023-photo-00097.png",
    "images/photo-gallery/jurse2023-photo-00098.png",
    "images/photo-gallery/jurse2023-photo-00099.png",
    "images/photo-gallery/jurse2023-photo-00100.png",
    "images/photo-gallery/jurse2023-photo-00109.png",
    "images/photo-gallery/jurse2023-photo-00101.png",
    "images/photo-gallery/jurse2023-photo-00102.png",
    "images/photo-gallery/jurse2023-photo-00103.png",
    "images/photo-gallery/jurse2023-photo-00104.png",
    "images/photo-gallery/jurse2023-photo-00066.png",
    "images/photo-gallery/jurse2023-photo-00106.png",
    "images/photo-gallery/jurse2023-photo-00107.png",
    "images/photo-gallery/jurse2023-photo-00108.png",
    "images/photo-gallery/jurse2023-photo-00060.png",
    "images/photo-gallery/jurse2023-photo-00110.png",
    "images/photo-gallery/jurse2023-photo-00111.png",
    "images/photo-gallery/jurse2023-photo-00112.png",
    "images/photo-gallery/jurse2023-photo-00113.png",
    "images/photo-gallery/jurse2023-photo-00114.png",
    "images/photo-gallery/jurse2023-photo-00115.png",
    "images/photo-gallery/jurse2023-photo-00116.png",
    "images/photo-gallery/jurse2023-photo-00117.png",
    "images/photo-gallery/jurse2023-photo-00118.png",
    "images/photo-gallery/jurse2023-photo-00119.png",
    "images/photo-gallery/jurse2023-photo-00120.png",
    "images/photo-gallery/jurse2023-photo-00121.png",
    "images/photo-gallery/jurse2023-photo-00122.png",
    "images/photo-gallery/jurse2023-photo-00123.png",
    "images/photo-gallery/jurse2023-photo-00124.png",
    "images/photo-gallery/jurse2023-photo-00125.png",
    "images/photo-gallery/jurse2023-photo-00126.png",
    "images/photo-gallery/jurse2023-photo-00127.png",
    "images/photo-gallery/jurse2023-photo-00128.png",
    "images/photo-gallery/jurse2023-photo-00129.png",
    "images/photo-gallery/jurse2023-photo-00130.png",
    "images/photo-gallery/jurse2023-photo-00131.png",
    "images/photo-gallery/jurse2023-photo-00132.png",
    "images/photo-gallery/jurse2023-photo-00133.png",
    "images/photo-gallery/jurse2023-photo-00134.png",
    "images/photo-gallery/jurse2023-photo-00135.png",
    "images/photo-gallery/jurse2023-photo-00136.png",
    "images/photo-gallery/jurse2023-photo-00137.png",
    "images/photo-gallery/jurse2023-photo-00138.png",
    "images/photo-gallery/jurse2023-photo-00139.png",
    "images/photo-gallery/jurse2023-photo-00140.png",
    "images/photo-gallery/jurse2023-photo-00141.png",
    "images/photo-gallery/jurse2023-photo-00142.png",
    "images/photo-gallery/jurse2023-photo-00143.png",
    "images/photo-gallery/jurse2023-photo-00144.png",
    "images/photo-gallery/jurse2023-photo-00145.png",
    "images/photo-gallery/jurse2023-photo-00161.png",
    "images/photo-gallery/jurse2023-photo-00147.png",
    "images/photo-gallery/jurse2023-photo-00148.png",
    "images/photo-gallery/jurse2023-photo-00149.png",
    "images/photo-gallery/jurse2023-photo-00150.png",
    "images/photo-gallery/jurse2023-photo-00152.png",
    "images/photo-gallery/jurse2023-photo-00151.png",
    "images/photo-gallery/jurse2023-photo-00153.png",
    "images/photo-gallery/jurse2023-photo-00154.png",
    "images/photo-gallery/jurse2023-photo-00155.png",
    "images/photo-gallery/jurse2023-photo-00156.png",
    "images/photo-gallery/jurse2023-photo-00157.png",
    "images/photo-gallery/jurse2023-photo-00172.png",
    "images/photo-gallery/jurse2023-photo-00164.png",
    "images/photo-gallery/jurse2023-photo-00165.png",
    "images/photo-gallery/jurse2023-photo-00146.png",
    "images/photo-gallery/jurse2023-photo-00162.png",
    "images/photo-gallery/jurse2023-photo-00163.png",
    "images/photo-gallery/jurse2023-photo-00159.png",
    "images/photo-gallery/jurse2023-photo-00160.png",
    "images/photo-gallery/jurse2023-photo-00166.png",
    "images/photo-gallery/jurse2023-photo-00167.png",
    "images/photo-gallery/jurse2023-photo-00168.png",
    "images/photo-gallery/jurse2023-photo-00169.png",
    "images/photo-gallery/jurse2023-photo-00170.png",
    "images/photo-gallery/jurse2023-photo-00171.png",
    "images/photo-gallery/jurse2023-photo-00158.png",
    "images/photo-gallery/jurse2023-photo-00173.png",
    "images/photo-gallery/jurse2023-photo-00174.png",
    "images/photo-gallery/jurse2023-photo-00177.png",
    "images/photo-gallery/jurse2023-photo-00176.png",
    "images/photo-gallery/jurse2023-photo-00175.png",
    "images/photo-gallery/jurse2023-photo-00179.png",
    "images/photo-gallery/jurse2023-photo-00197.png",
    "images/photo-gallery/jurse2023-photo-00198.png",
    "images/photo-gallery/jurse2023-photo-00210.png",
    "images/photo-gallery/jurse2023-photo-00182.png",
    "images/photo-gallery/jurse2023-photo-00183.png",
    "images/photo-gallery/jurse2023-photo-00178.png",
    "images/photo-gallery/jurse2023-photo-00185.png",
    "images/photo-gallery/jurse2023-photo-00186.png",
    "images/photo-gallery/jurse2023-photo-00193.png",
    "images/photo-gallery/jurse2023-photo-00184.png",
    "images/photo-gallery/jurse2023-photo-00189.png",
    "images/photo-gallery/jurse2023-photo-00190.png",
    "images/photo-gallery/jurse2023-photo-00191.png",
    "images/photo-gallery/jurse2023-photo-00192.png",
    "images/photo-gallery/jurse2023-photo-00187.png",
    "images/photo-gallery/jurse2023-photo-00194.png",
    "images/photo-gallery/jurse2023-photo-00195.png",
    "images/photo-gallery/jurse2023-photo-00196.png",
    "images/photo-gallery/jurse2023-photo-00188.png",
    "images/photo-gallery/jurse2023-photo-00180.png",
    "images/photo-gallery/jurse2023-photo-00181.png",
    "images/photo-gallery/jurse2023-photo-00208.png",
    "images/photo-gallery/jurse2023-photo-00201.png",
    "images/photo-gallery/jurse2023-photo-00202.png",
    "images/photo-gallery/jurse2023-photo-00203.png",
    "images/photo-gallery/jurse2023-photo-00204.png",
    "images/photo-gallery/jurse2023-photo-00205.png",
    "images/photo-gallery/jurse2023-photo-00212.png",
    "images/photo-gallery/jurse2023-photo-00213.png",
    "images/photo-gallery/jurse2023-photo-00200.png",
    "images/photo-gallery/jurse2023-photo-00209.png",
    "images/photo-gallery/jurse2023-photo-00199.png",
    "images/photo-gallery/jurse2023-photo-00211.png",
    "images/photo-gallery/jurse2023-photo-00206.png",
    "images/photo-gallery/jurse2023-photo-00220.png",
    "images/photo-gallery/jurse2023-photo-00214.png",
    "images/photo-gallery/jurse2023-photo-00215.png",
    "images/photo-gallery/jurse2023-photo-00222.png",
    "images/photo-gallery/jurse2023-photo-00217.png",
    "images/photo-gallery/jurse2023-photo-00207.png",
    "images/photo-gallery/jurse2023-photo-00219.png",
    "images/photo-gallery/jurse2023-photo-00218.png",
    "images/photo-gallery/jurse2023-photo-00221.png",
    "images/photo-gallery/jurse2023-photo-00216.png"
  ];
  
  // Variables to keep track of the current index and number of images to display
  let currentIndex = 0;
  const imagesPerPage = 30;
  
  // Function to display the images
  function displayImages(startIndex, endIndex) {
    const container = document.getElementById("photos");
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= allImages.length) {
        break;
      }
        const div = document.createElement('div');
        div.classList.add('col-md-2')
        const div2 = document.createElement('div');
        div2.classList.add('overflow-hidden')
        const img = document.createElement("img");
        img.setAttribute('data-enlargeable', '');
        img.setAttribute('width', '100%');
        img.setAttribute('style', 'cursor: zoom-in');
        img.setAttribute('onclick', 'manageClick("'+allImages[i]+'")');
        img.src = allImages[i];
        div2.appendChild(img);
        div.appendChild(div2);
        container.appendChild(div);
    }
  }
  
  // Function to handle the "Load More" button click
  function handleLoadMore() {
    const nextIndex = currentIndex + imagesPerPage;
    if (nextIndex >= allImages.length) {
      // Hide the "Load More" button if there are no more images
      document.getElementById("loadMoreButton").style.display = "none";
    }
    displayImages(currentIndex, nextIndex);
    currentIndex = nextIndex;
  }
  
  // Initial display
  handleLoadMore();