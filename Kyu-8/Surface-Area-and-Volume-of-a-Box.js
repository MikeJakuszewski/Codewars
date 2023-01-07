// DESCRIPTION:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//Solution 1

const getSize = (width,height,depth) => [((2*width*height)+(2*depth*height)+(2*depth*width)), (width*height*depth)]
