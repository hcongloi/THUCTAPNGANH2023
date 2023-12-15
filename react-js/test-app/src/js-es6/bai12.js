// Hàm trả về một Promise
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function example() {
    try {
        // Async function với await
        let result = await delay(2000);
        console.log('Hello World after 2s:', result);
    } catch (error) {
        console.log('Error:', error);
    } finally {
        console.log('End');
    }
}

example();