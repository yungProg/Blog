const blogCards = [
  {
    image: "assets/images/photo-1.png",
    category: "beauty",
    date: "21 Nov 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-2.png",
    category: "beauty",
    date: "14 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-3.png",
    category: "beauty",
    date: "11 Jan 2024",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-4.png",
    category: "fashion",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-5.png",
    category: "beauty",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-6.png",
    category: "beauty",
    date: "15 Sep 2022",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-7.png",
    category: "lifestyle",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-8.png",
    category: "lifestyle",
    date: "17 Dec 2022",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-9.png",
    category: "fashion",
    date: "21 Jun 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-10.png",
    category: "beauty",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-11.png",
    category: "lifestyle",
    date: "21 Feb 2024",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-12.png",
    category: "beauty",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-13.png",
    category: "lifestyle",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-14.png",
    category: "fashion",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-15.png",
    category: "fashion",
    date: "21 Mar 2024",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-16.png",
    category: "beauty",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-17.png",
    category: "beauty",
    date: "14 Jun 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-18.png",
    category: "lifestyle",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-19.jpg",
    category: "fashion",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-20.png",
    category: "beauty",
    date: "21 Dec 2022",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-21.png",
    category: "lifestyle",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-22.png",
    category: "beauty",
    date: "21 May 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
]

let toBeRendered = [...blogCards]

function blogCard(image, category, date, brief) {
  let card = `<div class="card">
  <img src="${image}" alt="">
  <div><p class="${category} type">${category[0].toUpperCase() + category.slice(1)}</p><p class="date">${date}</p></div>
  <p class="brief bold">${brief}</p>
</div>`

  return card
}

const filtersBtns = document.querySelectorAll(".category-btn")

const renderBlogCards = () => {
  const blogCardsWrapper = document.getElementById("blog-cards-wrapper")
  blogCardsWrapper.innerHTML = ""
  filtersBtns[0].classList.add("active")
  toBeRendered.map(item => (
    blogCardsWrapper.innerHTML += blogCard(item.image, item.category, item.date, item.brief)
  ))
} 

const filterCards = (el) => {
  if (el.textContent.toLowerCase() == "all posts"){
    toBeRendered = [...blogCards]
    renderBlogCards()
    filtersBtns.forEach(item => item.classList.remove("active"))
    filtersBtns[0].classList.add("active")
  } else {
    toBeRendered = blogCards.filter(item => (
      item.category == el.textContent.toLowerCase()
    ))
    renderBlogCards()
    filtersBtns.forEach(item => item.classList.remove("active"))
    el.classList.add("active")
  }
}

filtersBtns.forEach(item => item.addEventListener("click", () => filterCards(item)))