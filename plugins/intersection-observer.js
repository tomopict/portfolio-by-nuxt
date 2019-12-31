const lazyImages = document.querySelectorAll('.lazy')

if ('IntersectionObserver' in window) {
  const lazyImageObserver = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const lazyImage = entry.target
        lazyImage.classList.remove('lazy')
        lazyImage.classList.add('enter')
        lazyImageObserver.unobserve(lazyImage)
      }
    })
  })

  lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage)
  })
} else {
  // Possibly fall back to a more compatible method here
}
