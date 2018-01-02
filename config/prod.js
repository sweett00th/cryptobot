import {Fees, Units} from './Types.js';
import Convert from '../util/EthUnitConverter.js';



const feeFactory = (type = 'error', value = '0', unit = Units.USD, description = 'none') => {
    return ({
        type,
        value,
        unit,
        asUnit: (toUnit) => {
            this.value = Convert(this.value, unit, toUnit);
            this.unit = toUnit;
            return this;
        }
    })
}

module.exports = {
    kraken:{
        fees:{
            deposits:{
                eth:{},
                usd:feeFactory(Fees.NO_FEE)
            },
            withdrawals:{
                //todo: make sure these fees are correct
               eth:[feeFactory(Fees.FLAT_FEE, '5000', Units.FINNEY), feeFactory(Fees.GAS_FEE, 'dynamic', Units.FINNEY, 'kraken generated ethereum tx txFee')],
               btc:{},
               usd:feeFactory(Fees.FLAT_FEE, '500', Units.CENTS, 'kraken usd wire withdrawal fee'),

            },
            trading:{
                eth_usd:{
                    taker:feeFactory(Fees.PERCENTAGE, '0.3', Units.USD, 'kraken taker of liquidity fee'),
                    maker:feeFactory(Fees.NO_FEE)
                },
                btc_usd:{
                    taker:feeFactory(Fees.PERCENTAGE, '0.3', Units.USD, 'kraken taker of liquidity fee'),
                    maker:feeFactory(Fees.NO_FEE)
                }
            },

        },
        urls:{

        },
        credentials:{

        }
    },
    gdax:{
        fees:{
            deposits:{
                eth:{},
                usd:feeFactory(Fees.NO_FEE)
            },
            withdrawals:{
                //todo: make sure these fees are correct
               eth:[feeFactory(Fees.FLAT_FEE, '5000', Units.FINNEY), feeFactory(Fees.GAS_FEE, 'dynamic', Units.FINNEY, 'kraken generated ethereum tx txFee')],
               btc:{},
               usd:feeFactory(Fees.FLAT_FEE, '5.0', Units.USD, 'kraken usd wire withdrawal fee'),

            },
            trading:{
                eth_usd:{
                    taker:feeFactory(Fees.PERCENTAGE, '0.3', Units.USD, 'kraken taker of liquidity fee'),
                    maker:feeFactory(Fees.NO_FEE)
                },
                btc_usd:{
                    taker:feeFactory(Fees.PERCENTAGE, '0.3', Units.USD, 'kraken taker of liquidity fee'),
                    maker:feeFactory(Fees.NO_FEE)
                }
            },

        },
        urls:{

        },
        credentials:{

        }
    },
    gemini:{
        fees:{
            deposits:{
                eth:{},
                usd:feeFactory(Fees.NO_FEE)
            },
            wthdrawals:{
                //todo: make sure these fees are correct
               eth:[feeFactory(Fees.FLAT_FEE, '5000', Units.FINNEY), feeFactory(Fees.GAS_FEE, 'dynamic', Units.FINNEY, 'kraken generated ethereum tx txFee')],
               btc:{},
               usd:feeFactory(Fees.FLAT_FEE, '5.0', Units.USD, 'kraken usd wire withdrawal fee'),

            },
            trading:{
                eth_usd:{
                    taker:feeFactory(Fees.PERCENTAGE, '0.3', Units.USD, 'kraken taker of liquidity fee'),
                    maker:feeFactory(Fees.NO_FEE)
                },
                btc_usd:{
                    taker:feeFactory(Fees.PERCENTAGE, '0.3', Units.USD, 'kraken taker of liquidity fee'),
                    maker:feeFactory(Fees.NO_FEE)
                }
            },

        },
        urls:{

        },
        credentials:{

        }
    },
    bank:{
        fees:{
            withdrawal:{}
        }
    }
}