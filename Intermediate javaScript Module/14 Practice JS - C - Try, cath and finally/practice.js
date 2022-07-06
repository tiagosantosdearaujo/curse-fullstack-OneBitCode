class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        if (this.shotsLeft > 0){
            console.log("Bang!")
            this.shotsLeft -= 1
        } else {
            throw new Error (`Gun ${this.identifier} without ammo`) // obs this line
        }    
    }

    reload(){
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
} catch(e) {
    console.log(e.message)
    fenixWeapon.reload()
} finally{
    console.log("Nice shots")
}

console.log(fenixWeapon)