export default function getRandomColor() {
    return `${Math.round(Math.random() * (255))}, ${Math.round(Math.random() * (255))}, ${Math.round(Math.random() * (255))}`;
}