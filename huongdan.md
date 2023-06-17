- mở terminal lên
- nếu muốn cài thẳng vào máy tính gõ lệnh "npm install -g json-server"
- ngược lại:
  - tạo 1 folder và add folder vào cùng cấp với folder đang mở trên vs code (add folder to workspace)
  - bấm new terminal chọn vào folder vừa tạo
    - gõ npm init -> enter -> yes
    - gõ npm install json-server hoặc npm i json-server
- cài xong tạo file db.json hoặc có tên bất kì .json
- nếu cài global thì gõ json-server --watch db.json ngược lại vào file package.jcon vào mục "scripts"
  thêm lệnh dòng "start": "json-server --watch db.json";
  sau đó trên terminal gõ npm start
