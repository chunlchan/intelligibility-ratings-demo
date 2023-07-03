export default function useWait() {
    function wait(delay) {
        return new Promise(function (resolve) {
          setTimeout(resolve, delay);
        });
      }
  
    return { wait };
}