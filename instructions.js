// Было так:
fetch('https://neuro-ad.com/svo/email', {
  method: 'POST',
  body: {
    param1: 'value param 1',
    param2: 'value param 2',
    // ...
  },
});

//  Переписываем в такой вид
fetch('http://local-neuro-ad.com/svo/redirect-clear', {
  method: 'POST',
  body: {
    method: 'POST',
    url: 'http://URL_1/svo/email',
    param1: 'value param 1',
    param2: 'value param 2',
    // ...
  },
});

// Запрос будет преобразован в данный вид
fetch('http://neuro-ad.com/svo/email', {
  method: 'POST',
  body: {
    param1: 'value param 1',
    param2: 'value param 2',
    // ...
  },
});
