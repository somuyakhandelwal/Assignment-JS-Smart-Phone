// Progression 1: SmartPhone

class SmartPhone {
  constructor(ram, battery, price) {
    this.ram = ram;
    this.batteryPower = battery;
    this.price = price;
  }

  displayFeatures() {
    return this.ram + '\n' + this.batteryPower + '\n' + this.price;
  }

  remainingAmount(priceIHave) {
    this.price = this.price - priceIHave;
  }
}

// Progression 2: AndroidPhone

class AndroidPhone extends SmartPhone {
  constructor(model, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.modelName = model;
  }

  displayFeatures() {
    return ( this.modelName + '\n' + this.ram + '\n' + this.batteryPower + '\n' + this.price );
  }

  remainingAmount(priceIHave) {
    this.price = priceIHave - this.price;
    return this.price <= 0
      ? 'Customer has no more amount'
      : `Customer has remaining Rs.${this.price} after buying the android phone`;
  }
}

// Progression 3: IPhone

class IPhone extends SmartPhone {
  constructor(seriesName, ram, battery, price) {
    super(ram, battery, price);
    this.seriesName = seriesName;
  }

  displayFeatures() {
    return ( this.seriesName + '\n' + this.ram + '\n' + this.batteryPower + '\n' + this.price );
  }

  remainingAmount(priceIHave) {
    const initialPrice = this.price;
    this.price = priceIHave - this.price;
    return initialPrice > priceIHave
      ? "Customer can't able to buy a phone due to insufficient amount"
      : this.price <= 0
      ? 'Customer has no more amount'
      : 'Customer has remaining Rs.' + this.price + ' after buying an iphone';
  }
}

// Progression 4: MobileCampus

class MobileCampus {
  constructor(Mobile, AndroidMobile, IPhoneMobile) {
    this.NoOfMobiles = Mobile;
    this.NoOfAndroidMobiles = AndroidMobile;
    this.NoOfIPhoneMobiles = IPhoneMobile;
  }

  changeMobileAvailabilityNumber(cuont, type) {
    this.NoOfMobiles -= cuont;
    if (type === 'android') {
      this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - cuont;
      return 'Available android mobiles are ' + this.NoOfAndroidMobiles;
    }
    if (type === 'iphone') {
      this.NoOfIPhoneMobiles = this.NoOfIPhoneMobile - cuont;
      return 'Available iphone mobiles are ' + this.NoOfIPhoneMobiles;
    }
  }
}
