const checkLogin = require('./login');

test('Đăng nhập đúng tài khoản và mật khẩu trả về true', () => {
  expect(checkLogin('admin', '123')).toBe(true);
});

test('Đăng nhập sai mật khẩu trả về false', () => {
  expect(checkLogin('admin', 'wrongpass')).toBe(false);
});

test('Đăng nhập sai username trả về false', () => {
  expect(checkLogin('user', '123')).toBe(false);
});
