// STRETCH
const cars = [
  {
    vin: '5XXG34J54RG219816',
    make: 'kia',
    model: 'k5',
    mileage:  186011 ,
    title: 'clean',
    transmission: 'automatic',
  },
  {
  vin: '5XXG34J54RG219816',
    make: 'honda',
    model: 'cvic',
    mileage:  136011 ,
    title: 'salvage',
  },

  {
    vin: '5XXG34J54RG219816',
    make: 'mazda',
    model: 'gt',
    mileage:  176011, 
  },
]

// exports.seed = function(knex) {
//   return knex('cars')
//   .truncate().then(() => {
//    return knex('cars').insert(cars)
//   })  
// }

exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}

