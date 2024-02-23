import { PDFDownloadLink } from "@react-pdf/renderer";
import styled from "styled-components";
import PDFDocument from "../../components/PDFDocument";
import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const TelaAdminContainer = styled.section`
    padding: 60px;
    & h1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        & a{
            display: inline-block;
            line-height: 46px;
            background-color: #ff00a2;
            padding: 0 26px;
            border-radius: 5px;
            color: white;
            font-size: 14px;
            text-transform: uppercase;
            text-decoration: none;
        }
    }
    & .graficos{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 26px;
        & div{
            width: calc(70% - 16px);
            padding: 16px;
            border-radius: 5px;
            border: 1px solid #DDD;
            &:nth-child(even){
                width: 30%;
            }
            & .grafico{
                width: 100%;
                /* height: 250px; */
                border: 0;
            }
        }
    }
`;

const TelaAdmin = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [chartDataPie, setChartDataPie] = useState({});
    const [chartOptionsPie, setChartOptionsPie] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);

        // CONFIGURAÇÕES DO CHART PIE

        const dataPie = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                    ]
                }
            ]
        }
        const optionsPie = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartDataPie(dataPie);
        setChartOptionsPie(optionsPie);
    }, []);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40,60],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90,20],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <>
            <TelaAdminContainer>
                <h1>
                    Dashboard
                    <PDFDownloadLink
                        document={<PDFDocument />}
                        fileName={'registros.pdf'}
                    >
                        Baixar PDF
                    </PDFDownloadLink>
                </h1>
                <div className="graficos">
                    <div>
                        <h6>Total de visitantes</h6>
                        <Chart className="grafico"  type="bar" data={chartData} options={chartOptions} />
                    </div>
                    <div>
                        <h6>Total por gênero</h6>
                        <Chart className="grafico" type="pie" data={chartDataPie} options={chartOptionsPie} />
                    </div>
                    <div>
                        <h6>Teste linha</h6>
                        <Chart type="line" data={chartData} options={chartOptions} />
                    </div>
                    <div>grafico de pizza</div>
                </div>
            </TelaAdminContainer>
        </>
    );
}

export default TelaAdmin;