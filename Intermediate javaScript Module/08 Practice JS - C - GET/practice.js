class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad){
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }
    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let resourceProcessor = new ResourceProcessStation("Gaia", 500)

console.log(resourceProcessor.weeklyProcessedLoad)

console.log(resourceProcessor)