import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
    const rots = [4, -2, 1, -4, 1.5]; // Rotation for each card
    const yVals = [-20, -10, 0, 10, 20]; // Initial Y offset for fanning effect

    // Ref for the main container, though not strictly necessary for this GSAP setup
    const workExpRef = useRef(null);
    // Ref to store the Lenis instance for cleanup
    const lenisRef = useRef(null);
    // Ref to store the GSAP ticker callback for cleanup
    const tickerCallbackRef = useRef(null);
    // Ref to store the ScrollTrigger instance for cleanup
    const scrollTriggerInstanceRef = useRef(null);
    // Ref to store card elements
    const cardsRef = useRef([]);


    useEffect(() => {
        // Select card elements and store them
        cardsRef.current = gsap.utils.toArray(".card");
        const localCards = cardsRef.current; // Use a local variable for safety within this effect

        if (localCards.length === 0) {
            console.warn("No cards found for animation.");
            return;
        }

        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis();
        lenisRef.current = lenis; // Store for cleanup

        // Update ScrollTrigger on Lenis scroll
        lenis.on("scroll", ScrollTrigger.update);

        // Add Lenis raf to GSAP ticker
        const tickerCb = (time) => {
            lenis.raf(time * 1000); // Lenis expects time in milliseconds
        };
        tickerCallbackRef.current = tickerCb; // Store for cleanup
        gsap.ticker.add(tickerCb);
        gsap.ticker.lagSmoothing(0); // Disable GSAP's lag smoothing

        // Initial setup for each card's position and style
        localCards.forEach((card, i) => {
            gsap.set(card, {
                rotate: rots[i % rots.length], // Use modulo for safety if arrays mismatch
                y: window.innerHeight,         // Start at the bottom of the viewport
                translateY: yVals[i % yVals.length], // Apply fanning offset
                zIndex: localCards.length - i,  // Stacking order (topmost card is the last one initially)
                // position: "absolute" is already set by Tailwind className 'absolute'
            });
        });

        // Create the ScrollTrigger animation
        const st = ScrollTrigger.create({
            trigger: workExpRef.current, // Use ref for the trigger element
            start: "top top",            // Animation starts when the top of .work-exp hits the top of the viewport
            // Pin the .work-exp container for the duration of the scroll animation
            pin: true,
            pinSpacing: true, // Add padding to the bottom of the pinned element to make space for the scroll
            // Scrub smoothly links the animation progress to scrollbar position
            scrub: 1,
            // markers: true, // Uncomment for debugging ScrollTrigger start/end points
            // Total scroll distance for the animation: (number of cards) * viewport height
            // Each card effectively gets one viewport height of scroll to animate fully.
            end: () => `+=${window.innerHeight * localCards.length}`,
            onUpdate: (self) => {
                const progress = self.progress; // Overall progress of the ScrollTrigger (0 to 1)
                const totalCards = localCards.length;
                const progressPerCard = 1 / totalCards; // Progress allocated to each card's main animation

                localCards.forEach((card, index) => {
                    // cardStart is the ScrollTrigger progress point where this card begins its main animation
                    const cardStartProgress = index * progressPerCard;
                    // cardProgress calculates the individual progress for the current card's main animation (0 to 1)
                    let cardAnimationProgress = (progress - cardStartProgress) / progressPerCard;
                    cardAnimationProgress = Math.min(Math.max(cardAnimationProgress, 0), 1); // Clamp between 0 and 1

                    // Primary animation: move card from bottom to its "stacked" position
                    // yPos goes from window.innerHeight (bottom) to 0 (top of its slot) as cardAnimationProgress goes 0 to 1
                    let yPos = window.innerHeight * (1 - cardAnimationProgress);
                    let xPos = 0; // Default horizontal position

                    // "Fly off" animation for cards that have completed their primary stacking animation
                    // This happens if the card is fully stacked (cardAnimationProgress === 1) and it's not the last card
                    if (cardAnimationProgress === 1 && index < totalCards - 1) {
                        // currentCardEndProgress is the ScrollTrigger progress point where this card finished its main animation
                        const currentCardEndProgress = (index + 1) * progressPerCard;

                        // Check if the overall scroll has progressed beyond this card's main animation phase
                        if (progress > currentCardEndProgress) {
                            // flyOffProgress calculates how far (0 to 1) this card should be in its "fly off" animation
                            // The fly-off happens over the duration of one "progressPerCard" slot
                            let flyOffProgress = (progress - currentCardEndProgress) / progressPerCard;
                            flyOffProgress = Math.min(Math.max(flyOffProgress, 0), 1); // Clamp 0-1

                            const distanceMultiplier = 1 - (index * 0.1); // Earlier cards fly off slightly more/faster
                            
                            // Cards fly off to the top-left
                            xPos = -window.innerWidth * 0.4 * distanceMultiplier * flyOffProgress;
                            // yPos for fly-off is relative to its stacked position (which was y=0 effectively)
                            // So, a negative yPos moves it further up and off-screen.
                            yPos = -window.innerHeight * 0.4 * distanceMultiplier * flyOffProgress;
                        }
                    }
                    
                    // Apply the calculated transformations to the card
                    gsap.to(card, {
                        y: yPos,
                        x: xPos,
                        duration: 0.1, // A small duration can help with scrub smoothness
                        ease: "none"   // Linear easing as scrub handles the timing
                    });
                });
            }
        });
        scrollTriggerInstanceRef.current = st; // Store for cleanup

        // Refresh ScrollTrigger on resize to recalculate dimensions
        // Lenis also needs to be aware of resize for its calculations
        const handleResize = () => {
            if (lenisRef.current) {
                lenisRef.current.resize();
            }
            ScrollTrigger.refresh();
        };
        window.addEventListener('resize', handleResize);


        // Cleanup function: This is crucial for React components
        
    }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount

    return (
        // The main container for the card animation.
        // `h-screen` gives it full viewport height, essential for `pin:true` to work correctly.
        // `workExpRef` is used as the trigger for ScrollTrigger.
        <div ref={workExpRef} className='work-exp w-full h-screen relative flex justify-center items-center overflow-hidden bg-gray-800'>
            {/* Static cards for the animation. Ensure they have unique keys if mapped. */}
            <div className='card absolute h-5/6 w-5/6 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex justify-center items-center text-white text-4xl font-bold shadow-2xl will-change-transform p-8'>
                Card 1: Project Alpha
            </div>
            <div className='card absolute h-5/6 w-5/6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex justify-center items-center text-white text-4xl font-bold shadow-2xl will-change-transform p-8'>
                Card 2: Service Beta
            </div>
            <div className='card absolute h-5/6 w-5/6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex justify-center items-center text-white text-4xl font-bold shadow-2xl will-change-transform p-8'>
                Card 3: Feature Gamma
            </div>
            <div className='card absolute h-5/6 w-5/6 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl flex justify-center items-center text-white text-4xl font-bold shadow-2xl will-change-transform p-8'>
                Card 4: Platform Delta
            </div>
            <div className='card absolute h-5/6 w-5/6 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-3xl flex justify-center items-center text-white text-4xl font-bold shadow-2xl will-change-transform p-8'>
                Card 5: Initiative Epsilon
            </div>
        </div>
    );
};


export default Cards; // Export App as default to render the whole page
// If you only want to export Cards, change to: export default Cards;
