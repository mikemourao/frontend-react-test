export const clearLocalStorages = () => {
    window.close();
    window.open ("http://localhost:3000/");
    
    window.location.reload();
}
