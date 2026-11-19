const browsers = ["Chrome", "Firefox", "Safari"];
const oses = ["Windows", "macOS", "Linux"];
const environments = ["Dev", "Stage", "Prod"];

const totalCombinations = browsers.length * oses.length * environments.length
console.log("--- Проблема комбинаторного взрыва ---")
console.log(`Если тестировать все комбинации: ${totalCombinations} тестов.`)
let counter = 1
for (const browser of browsers) {
    for (const os of oses) {
        for (const env of environments) {
            console.log(`Попытка №${counter} : ${os} + ${browser} + ${env}`)
            counter++
        }
    }
}