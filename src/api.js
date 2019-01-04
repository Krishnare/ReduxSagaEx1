export const fetchData = async () =>{
    try{
        const response = await fetch('https://api.myjson.com/bins/uyl3y');
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e)
    }   
}