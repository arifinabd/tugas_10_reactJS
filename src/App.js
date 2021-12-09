import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Divider,
  Flag,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Label,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br />
      <Grid container columns="equal">
        <Grid.Column width={1}>
          <Flag name="indonesia" />
        </Grid.Column>
        <Grid.Column width={1}>
          <Icon name="angle left" />
        </Grid.Column>
        <Grid.Column width={1}>
          <Icon name="angle right" />
        </Grid.Column>
        <Grid.Column width={11}>
          <Input fluid icon="star" placeholder="Search..." />
        </Grid.Column>
        <Grid.Column>
          <Header as="h3">
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              circular
            />
            Patrick
          </Header>
        </Grid.Column>
      </Grid>
      <Divider horizontal>SELAMAT DATANG !!!!</Divider>
      <Grid columns="equal">
        <Grid.Column width={13}></Grid.Column>
        <Grid.Column>
          <Label as="a" tag color="teal">
            SPORT
          </Label>
        </Grid.Column>
      </Grid>
      <br />
      <Container textAlign="center">
        <p>
          Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen
          aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan
          melanjutkan ke CAS Baca artikel detiksport, "Andai Gugatan Rival
          Dikabulkan, Ducati Akan Lanjutkan ke CAS?" Suzuki, Honda, KTM, dan
          Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea
          Dovizioso dan Danilo Petrucci dalam balapan pertama MotoGP 2019 di
          Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai
          pemenang usai mengalahkan Marc Marquez. Keempat tim meyakini, komponen
          itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang
          membantu motor melesat di trek. Sementara Ducati bersikukuh komponen
          itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director
          sebelum balapan. Baca artikel detiksport, "Andai Gugatan Rival
          Dikabulkan, Ducati Akan Lanjutkan ke CAS?"Ducati tengah menunggu
          sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai
          gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS
          Baca artikel detiksport, "Andai Gugatan Rival Dikabulkan, Ducati Akan
          Lanjutkan ke CAS?" Suzuki, Honda, KTM, dan Aprilia memprotes
          penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan
          Danilo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena
          dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang
          usai mengalahkan Marc Marquez. Keempat tim meyakini, komponen itu
          memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu
          motor melesat di trek. Sementara Ducati bersikukuh komponen itu cuma
          untuk mendinginkan ban dan sudah disetujui Technical Director sebelum
          balapan. Baca artikel detiksport, "Andai Gugatan Rival Dikabulkan,
          Ducati Akan Lanjutkan ke CAS?". Keempat tim meyakini, komponen itu
          memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu
          motor melesat di trek.
        </p>
      </Container>
      <br />
      <center>
        <Button attached="left" icon="plus" color="teal" />
        <Button attached="right" color="teal">
          Tambah Tautan Ke List
        </Button>
      </center>
    </div>
  );
}

export default App;
