var orderHistory = [
  {
    orderNumber: '' + 114 + '-' + 3941689 + '-' + 877223,
    itemNumbers: 1,
    itemList: [
      {
        itemType: 'Book',
        title: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        itemPrice: 31.55,
        returnWindowClose: 'Sep 7, 2020',
        buyAgain: 'href = buyItAgain-url',
        viewItem: 'href = view-item-url',
        productReview: 'href = write-review-url',
        getSupportFlag: 0
      }
    ],
    orderDeliveredDate: 'Aug 8, 2020',
    orderDeliveredNote: '',
    orderDetails: 'href=url',
    orderDate: 'August 4, 2020',
    orderTotal: 34.00,
    orderInvoice: 'href=url',
    shipTo: 'href=JS Masher'

  },
  {
    orderNumber: '' + 113 + '-' + 9984268 + '-' + 1280257,
    itemNumbers: 1,
    itemList: [
      {
        itemType: 'Book',
        title: 'The Timeless Way of Building',
        author: 'Alexander. Christopher',
        itemPrice: 41.33,
        returnWindowClose: 'Aug 19, 2020',
        buyAgain: 'href = buyItAgain-url',
        viewItem: 'href = view-item-url',
        productReview: 'href = write-review-url',
        getSupportFlag: 0
      }
    ],
    orderDeliveredDate: 'Jul 20, 2020',
    orderDeliveredNote: 'Your package was delivered. It was handed directly to a resident',
    orderDetails: 'href=url',
    orderDate: 'July 19, 2020',
    orderTotal: 44.53,
    orderInvoice: 'href=url',
    shipTo: 'href=JS Masher'
  },
  {
    orderNumber: '' + 114 + '-' + 2875557 + '-' + 9059409,
    itemNumbers: 1,
    itemList: [
      {
        itemType: 'Electronics',
        title: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U,PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        author: '',
        itemPrice: 15.98,
        returnWindowClose: 'Aug 5. 2020',
        buyAgain: 'href = buyItAgain-url',
        viewItem: 'href = view-item-url',
        productReview: 'href = write-review-url',
        getSupportFlag: 1
      }
    ],
    orderDeliveredDate: 'Jul 7, 2020',
    orderDeliveredNote: 'Your package was delivered. It was handed directly to a resident',
    orderDetails: 'href=url',
    orderDate: 'July 4, 2020',
    orderTotal: 17.22,
    orderInvoice: 'href=url',
    shipTo: 'href=JS Masher'
  },
  {
    orderNumber: '' + 113 + '-' + 2883177 + '-' + 2648248,
    itemNumbers: 2,
    itemList: [
      {
        itemType: 'Electronics',
        title: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: '',
        itemPrice: 94.95,
        returnWindowClose: 'Aug 4, 2020',
        buyAgain: 'href = buyItAgain-url',
        viewItem: 'href = view-item-url',
        productReview: 'href = write-review-url',
        getSupportFlag: 0
      },
      {
        itemType: 'Book',
        title: 'The Art of Sql',
        author: 'Faroult. Steohane',
        itemPrice: 33.99,
        returnWindowClose: 'Aug 4, 2020',
        buyAgain: 'href = buyItAgain-url',
        viewItem: 'href = view-item-url',
        productReview: 'href = write-review-url'
      }
    ],
    orderDeliveredDate: 'Jul 5, 2020',
    orderDeliveredNote: '',
    orderDetails: 'href=url',
    orderDate: 'July 3, 2020',
    orderTotal: 138.93,
    orderInvoice: 'href=url',
    shipTo: 'href=JS Masher'
  }

];

/* Order number of the first order */
console.log('');
console.log('Order number of the first order: ', orderHistory[0].orderNumber);
console.log('');
console.log('Order number of the second order: ', orderHistory[1].orderNumber);
console.log('');
console.log('How many items in the fourth order: ', orderHistory[3].itemNumbers);
