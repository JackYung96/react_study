console.log('몽고디비 연결 테스트 시작');
const mongoose = require('mongoose');

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

  mongoose.connect('mongodb://gait:react2024@localhost:27017/admin', {
    dbName: 'mongo',
    // useNewUrlParser: true,
    // userCreateIndex: true,
  }, (error) => {
    if (error) {
      console.log('몽고디비 연결 에러', error);
    } else {
      console.log('몽고디비 연결 성공');
    }
  });
}

mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {

  setTimeout(()=>{
    console.error('몽고디비 연결이 끊겼습니다. 5초뒤 연결을 재시도 합니다');

    connect();
  },5000);

});

module.exports = connect;

console.log('몽고디비 연결 테스트 종료');