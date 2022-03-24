import "../../App.css";
import { ContainerForm } from "../../components/Contacts";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Edit from "../../components/Edit";

const EditContact = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://scontent.fplu8-1.fna.fbcdn.net/v/t1.18169-9/10306232_578591528948553_5843355773361946303_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEock17EPNgwzy-EKbWShuLFqDCxxlaPxcWoMLHGVo_F-4Z4gvl0IH19Psga-keg9NpShF6Orn_OHg5_eRPc5jI&_nc_ohc=1945BCRc8V0AX9G9q9D&_nc_ht=scontent.fplu8-1.fna&oh=00_AT9I730XfkHfBDKywcESjX8RCvwCIfuWTcMIij4GFTRNfg&oe=62602755"
          }
          className="App-logo"
          alt="logo"
        />
        <p>Lista de contatos Befective</p>
      </header>
      <ContainerForm>
        <Edit></Edit>
      </ContainerForm>
    </div>
  );
};

export default EditContact;
