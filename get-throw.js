const getRandomThrow = () => {
    const getZeroOneTwo = Math.floor(Math.random() * 3);
    if (getZeroOneTwo === 0) {
        return 'rock';
    } else if (getZeroOneTwo === 1) {
        return 'paper';
    } else if (getZeroOneTwo === 2) {
        return 'scissors';}
};
export default getRandomThrow; 