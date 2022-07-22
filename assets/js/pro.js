gsap.registerPlugin(ScrollTrigger);

gsap.to('.formations', {
    scrollTrigger: {
        trigger: '.formations',
        toggleActions: 'restart'
    },
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 1
})
gsap.to('.digital-image', {
    scrollTrigger: {
        trigger: '.digital-image',
        toggleActions: 'restart'
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
    delay: 2
})
gsap.to('.nocode-image', {
    scrollTrigger: {
        trigger: '.nocode-image',
        toggleActions: 'restart'
    },
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 2.5
})
gsap.to('.down-content', {
    scrollTrigger: {
        trigger: '.down-content',
        toggleActions: 'restart'
    },
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 1
})
gsap.to('.left-image', {
    scrollTrigger: {
        trigger: '.left-image',
        toggleActions: 'restart'
    },
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 2
})
gsap.to('.right-content', {
    scrollTrigger: {
        trigger: '.right-content',
        toggleActions: 'restart'
    },
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 2.2
})
gsap.to('.contact1', {
    scrollTrigger: {
        trigger: '.contact1',
        toggleActions: 'restart'
    },
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 2.2
})
gsap.to('.contact2', {
    scrollTrigger: {
        trigger: '.contact2',
        toggleActions: 'restart'
    },
    y: 0,
    opacity: 1,
    duration: 1.5,
    delay: 2.2
})
gsap.to('.testimony-title', {
    scrollTrigger: {
        trigger: '.testimony-title',
        toggleActions: 'restart'
    },
    y: 0,
    opacity: 1,
    duration: 1.5,
    delay: 1
})
gsap.to('.owl-testimonials', {
    scrollTrigger: {
        trigger: '.owl-testimonials',
        toggleActions: 'restart'
    },
    y: 0,
    opacity: 1,
    duration: 1.5,
    delay: 1.5
})
gsap.to('.contact3', {
    scrollTrigger: {
        trigger: '.contact1',
        toggleActions: 'restart'
    },
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 2.2
})
let accordion_head = document.querySelectorAll('.accordion-item-header');
let accordion_body = document.querySelectorAll('.accordion-body');
let accordionBodyContent = document.querySelectorAll('.accordion-body-content');

accordion_head.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle("change");
    });

})