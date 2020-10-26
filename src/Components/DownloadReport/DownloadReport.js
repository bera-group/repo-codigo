import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFDownloadLink
} from '@react-pdf/renderer';
import myPDFHeaderImage from '../../assets/img/PDFReport/header.png';
import myPDFFooterImage from '../../assets/img/PDFReport/footer.png';
import { getCurrentFullDateWithLocale } from '../../common/utils';
import { Fab } from '@material-ui/core';

const myStyle = makeStyles((theme) => ({
  icon: {
    color: 'white'
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  headerImage: {
    width: '100%',
    height: 120
  },
  footerImage: {
    width: 300,
    height: 150,
    marginVertical: 0,
    marginHorizontal: 0
  },
  topTitle: {
    textAlign: 'center',
    fontSize: 20,
    position: 'absolute',
    top: -250
  },
  subtitle: {
    marginLeft: 50,
    marginBottom: 10,
    fontSize: 15
  },
  infoSection: {
    position: 'absolute',
    top: 250
  },
  testDetailsSection: {
    position: 'absolute',
    top: 370
  },
  section: {
    marginLeft: 70,
    flexDirection: 'row'
  },
  subfield: {
    color: 'black',
    fontSize: 15
  },
  valueField: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 5
  },
  date: {
    flexDirection: 'row',
    fontSize: 10,
    position: 'absolute',
    top: 120,
    right: 300
  }
});

const DownloadReport = (props) => {
  const classes = myStyle();

  const PDFReport = () => (
    <Document>
      <Page size='A4' style={styles.page}>
        <View>
          <Image src={myPDFHeaderImage} style={styles.headerImage} />
        </View>

        <View>
          <Text style={styles.topTitle}>REPORTE DE PRUEBA</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.subtitle}>INFORMACIÓN DEL EVALUADO</Text>
          <View>
            <View style={styles.section}>
              <Text style={styles.subfield}>Nombre:</Text>
              <Text style={styles.valueField}>{props.name}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subfield}>Correo: </Text>
              <Text style={styles.valueField}>{props.email}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subfield}>Teléfono:</Text>
              <Text style={styles.valueField}>{props.phone}</Text>
            </View>
          </View>
        </View>

        <View style={styles.testDetailsSection}>
          <Text style={styles.subtitle}>DETALLES DE LA PRUEBA</Text>
          <View>
            <View style={styles.section}>
              <Text style={styles.subfield}>Nombre:</Text>
              <Text style={styles.valueField}>{props.testName}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subfield}>Evaluador:</Text>
              <Text style={styles.valueField}>{props.evaluator}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subfield}>Fecha de aplicación:</Text>
              <Text style={styles.valueField}>{props.appDate}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subfield}>Estado de la prueba:</Text>

              <Text style={styles.valueField}>{props.testState}</Text>
            </View>
            {props.testState === 'No realizada' ? null : (
              <View style={styles.section}>
                <Text style={styles.subfield}>Calificación:</Text>
                <Text style={styles.valueField}>{props.calification}</Text>
              </View>
            )}
          </View>
        </View>

        <View
          style={{
            alignItems: 'flex-end'
          }}>
          <View style={styles.date}>
            <Text style={[styles.subfield, { fontSize: 10 }]}>
              Expedición del reporte:
            </Text>
            <Text style={[styles.valueField, { fontSize: 10 }]}>
              {getCurrentFullDateWithLocale()}
            </Text>
          </View>
          <Image src={myPDFFooterImage} style={styles.footerImage} />
        </View>
      </Page>
    </Document>
  );
  return (
    <PDFDownloadLink
      document={<PDFReport />}
      fileName={`${props.name} - ${props.id}`}>
      {({ blob, url, loading, error }) => (
        <Fab variant='extended' size='large' aria-label='add'>
          <GetAppIcon className={classes.extendedIcon} />
          Descargar reporte
        </Fab>
      )}
    </PDFDownloadLink>
  );
};

export default memo(DownloadReport);
