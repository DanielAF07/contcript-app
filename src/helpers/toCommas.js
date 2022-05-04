export default function toCommas(num) {
    if(!isNaN(num)){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
