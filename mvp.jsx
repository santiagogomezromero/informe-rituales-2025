import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, DollarSign, MousePointer, ShoppingCart, Eye, Users, Video, Target, Zap } from 'lucide-react';

const RitualesCalmaReport = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Datos detallados de anuncios de venta
  const ventasDetalle = [
    {
      campana: "v.1 LAUNCH TIBIO",
      anuncio: "Recupera tu poder",
      gastado: 175.86,
      compras: 24,
      alcance: 13173,
      impresiones: 26163,
      costoCompra: 7.33,
      pagos: 162,
      clics: 1468,
      cpc: 0.120,
      cpm: 6.72,
      tasaConversion: 14.81
    },
    {
      campana: "v.2 LAUNCH TIBIO",
      anuncio: "Si eres como yo acelerada",
      gastado: 76.26,
      compras: 14,
      alcance: 5646,
      impresiones: 9899,
      costoCompra: 5.45,
      pagos: 45,
      clics: 346,
      cpc: 0.220,
      cpm: 7.70,
      tasaConversion: 31.11
    },
    {
      campana: "v.3 Imágenes TIBIO",
      anuncio: "FLEXIBLE (Imagen)",
      gastado: 73.96,
      compras: 9,
      alcance: 3166,
      impresiones: 8562,
      costoCompra: 8.22,
      pagos: 35,
      clics: 262,
      cpc: 0.282,
      cpm: 8.64,
      tasaConversion: 25.71
    },
    {
      campana: "v.4 PE MX ARG",
      anuncio: "Recupera tu poder",
      gastado: 23.24,
      compras: 1,
      alcance: 4536,
      impresiones: 5295,
      costoCompra: 23.24,
      pagos: 11,
      clics: 154,
      cpc: 0.151,
      cpm: 4.39,
      tasaConversion: 9.09
    },
    {
      campana: "RMKT CALIENTE",
      anuncio: "Aún estás a tiempo",
      gastado: 13.95,
      compras: 2,
      alcance: 2080,
      impresiones: 3229,
      costoCompra: 6.98,
      pagos: 6,
      clics: 20,
      cpc: 0.698,
      cpm: 4.32,
      tasaConversion: 33.33
    },
    {
      campana: "v.1 LAUNCH TIBIO",
      anuncio: "Recuerda tu capacidad",
      gastado: 4.04,
      compras: 2,
      alcance: 461,
      impresiones: 599,
      costoCompra: 2.02,
      pagos: 8,
      clics: 43,
      cpc: 0.094,
      cpm: 6.74,
      tasaConversion: 25.00
    }
  ];

  // Datos de campañas de awareness con detalle de anuncios
  const awarenessDetalle = [
    {
      campana: "CONTENIDO FRIO",
      anuncio: "Sonidos Vibraciones (Advantage)",
      gastado: 37.20,
      thruplays: 49930,
      alcance: 335881,
      impresiones: 375660,
      costoThruplay: 0.000745,
      visualizaciones: 365158,
      vtr25: 38572,
      vtr50: 20668,
      vtr75: 12990,
      vtr100: 8686
    },
    {
      campana: "CONTENIDO FRIO",
      anuncio: "Sonidos Vibraciones (Directos)",
      gastado: 37.20,
      thruplays: 45884,
      alcance: 276999,
      impresiones: 307489,
      costoThruplay: 0.000811,
      visualizaciones: 300546,
      vtr25: 35601,
      vtr50: 18958,
      vtr75: 11949,
      vtr100: 8030
    },
    {
      campana: "CONTENIDO FRIO",
      anuncio: "Sonidos Vibraciones (Indirectos)",
      gastado: 37.21,
      thruplays: 44799,
      alcance: 264547,
      impresiones: 293104,
      costoThruplay: 0.000831,
      visualizaciones: 286900,
      vtr25: 34791,
      vtr50: 18777,
      vtr75: 11920,
      vtr100: 7998
    },
    {
      campana: "CALMA CTA TIBIO",
      anuncio: "Calma (Video)",
      gastado: 67.72,
      thruplays: 61371,
      alcance: 216692,
      impresiones: 251595,
      costoThruplay: 0.001103,
      visualizaciones: 251337,
      vtr25: 38771,
      vtr50: 24574,
      vtr75: 14953,
      vtr100: 7058
    },
    {
      campana: "CALMA CTA TIBIO",
      anuncio: "Calma 2 (Video)",
      gastado: 21.37,
      thruplays: 17581,
      alcance: 81997,
      impresiones: 85276,
      costoThruplay: 0.001216,
      visualizaciones: 83425,
      vtr25: 12765,
      vtr50: 7196,
      vtr75: 4392,
      vtr100: 1574
    },
    {
      campana: "VISITA PERFIL FRIO",
      anuncio: "Malestares recurrentes",
      gastado: 94.78,
      thruplays: 0,
      alcance: 77779,
      impresiones: 138148,
      costoThruplay: 0,
      visualizaciones: 139843,
      visitasPerfil: 4055,
      vtr25: 16077,
      vtr50: 11562,
      vtr75: 9426,
      vtr100: 6065
    }
  ];

  // Totales actualizados
  const totales = {
    gastoTotal: 676.82,
    gastoVentas: 381.34,
    gastoAwareness: 295.48,
    compras: 52,
    pagosIniciados: 276,
    alcanceTotal: 1254895,
    visualizacionesTotales: 1427209,
    thruplays: 219565
  };

  // Análisis de creativos
  const creativosVenta = [
    { creativo: "Recupera tu poder", compras: 25, gastado: 199.10, costo: 7.96 },
    { creativo: "Si eres acelerada", compras: 14, gastado: 76.26, costo: 5.45 },
    { creativo: "FLEXIBLE (Imagen)", compras: 9, gastado: 73.96, costo: 8.22 },
    { creativo: "Recuerda tu capacidad", compras: 2, gastado: 4.04, costo: 2.02 },
    { creativo: "Aún estás a tiempo", compras: 2, gastado: 13.95, costo: 6.98 }
  ];

  // Análisis de retención de video
  const retencionVideo = awarenessDetalle
    .filter(a => a.vtr100 > 0)
    .map(a => ({
      nombre: a.anuncio.substring(0, 20) + '...',
      'VTR 25%': ((a.vtr25 / a.visualizaciones) * 100).toFixed(1),
      'VTR 50%': ((a.vtr50 / a.visualizaciones) * 100).toFixed(1),
      'VTR 75%': ((a.vtr75 / a.visualizaciones) * 100).toFixed(1),
      'VTR 100%': ((a.vtr100 / a.visualizaciones) * 100).toFixed(1)
    }));

  // Comparación de audiencias
  const audienciasData = [
    { audiencia: 'Engagers IG/FB', compras: 49, gastado: 331.55, costo: 6.77 },
    { audiencia: 'Remarketing', compras: 2, gastado: 28.67, costo: 14.34 },
    { audiencia: 'Followers y Lista', compras: 0, gastado: 3.57, costo: 0 },
    { audiencia: 'Geo Escala', compras: 1, gastado: 23.24, costo: 23.24 }
  ];

  // Eficiencia por temperatura
  const temperaturaData = [
    { tipo: 'TIBIO (Warm)', compras: 49, gastado: 353.56, roi: 13.9 },
    { tipo: 'CALIENTE (Hot)', compras: 2, gastado: 28.67, roi: 7.0 },
    { tipo: 'FRIO (Cold)', compras: 0, gastado: 0, roi: 0 }
  ];

  const StatCard = ({ title, value, icon: Icon, color, subtitle }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2" style={{ color }}>{value}</p>
          {subtitle && <p className="text-gray-400 text-xs mt-1">{subtitle}</p>}
        </div>
        <Icon size={40} style={{ color }} className="opacity-20" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">📊 Reporte Completo de Campañas</h1>
          <h2 className="text-2xl text-purple-600 mb-4">Rituales de Calma - Análisis Detallado</h2>
          <p className="text-gray-600">Período: 1 de noviembre 2025 - 2 de enero 2026</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex flex-wrap border-b">
            {['overview', 'ventas', 'awareness', 'creativos', 'audiencias', 'conclusiones'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-4 font-medium transition-colors text-sm ${
                  activeTab === tab
                    ? 'border-b-2 border-purple-600 text-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'overview' && '📈 Resumen'}
                {tab === 'ventas' && '🛒 Ventas'}
                {tab === 'awareness' && '👁️ Awareness'}
                {tab === 'creativos' && '🎨 Creativos'}
                {tab === 'audiencias' && '🎯 Audiencias'}
                {tab === 'conclusiones' && '💡 Conclusiones'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPIs principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Inversión Total"
                value={`$${totales.gastoTotal.toFixed(2)}`}
                icon={DollarSign}
                color="#10b981"
              />
              <StatCard
                title="Compras Totales"
                value={totales.compras}
                icon={ShoppingCart}
                color="#3b82f6"
                subtitle={`${totales.pagosIniciados} pagos iniciados`}
              />
              <StatCard
                title="Alcance Total"
                value={totales.alcanceTotal.toLocaleString()}
                icon={Users}
                color="#f59e0b"
              />
              <StatCard
                title="Video ThruPlays"
                value={totales.thruplays.toLocaleString()}
                icon={Video}
                color="#8b5cf6"
              />
            </div>

            {/* Segunda fila de KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Costo por Compra"
                value={`$${(totales.gastoVentas / totales.compras).toFixed(2)}`}
                icon={Target}
                color="#ec4899"
                subtitle="Promedio campañas de venta"
              />
              <StatCard
                title="Tasa de Conversión"
                value={`${((totales.compras / totales.pagosIniciados) * 100).toFixed(1)}%`}
                icon={TrendingUp}
                color="#14b8a6"
                subtitle="Pagos a compras"
              />
              <StatCard
                title="Visualizaciones"
                value={totales.visualizacionesTotales.toLocaleString()}
                icon={Eye}
                color="#f97316"
                subtitle="Total de views"
              />
            </div>

            {/* Gráficos overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Rendimiento por Creativo</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={creativosVenta}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="creativo" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="compras" fill="#10b981" name="Compras" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Eficiencia por Temperatura</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={temperaturaData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tipo" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="compras" fill="#3b82f6" name="Compras" />
                    <Bar yAxisId="right" dataKey="roi" fill="#f59e0b" name="ROI %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ventas' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Costo por Compra</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={ventasDetalle}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="anuncio" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                    <Bar dataKey="costoCompra" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tasa de Conversión</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={ventasDetalle}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="anuncio" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="tasaConversion" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Detalle de Anuncios de Venta</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Anuncio</th>
                      <th className="px-4 py-3 text-right">Gastado</th>
                      <th className="px-4 py-3 text-right">Compras</th>
                      <th className="px-4 py-3 text-right">Pagos</th>
                      <th className="px-4 py-3 text-right">Conv %</th>
                      <th className="px-4 py-3 text-right">Costo/Compra</th>
                      <th className="px-4 py-3 text-right">CPC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ventasDetalle.map((row, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">{row.anuncio}</td>
                        <td className="px-4 py-3 text-right">${row.gastado.toFixed(2)}</td>
                        <td className="px-4 py-3 text-right font-bold text-green-600">{row.compras}</td>
                        <td className="px-4 py-3 text-right">{row.pagos}</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-600">{row.tasaConversion.toFixed(1)}%</td>
                        <td className="px-4 py-3 text-right">${row.costoCompra.toFixed(2)}</td>
                        <td className="px-4 py-3 text-right">${row.cpc.toFixed(3)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'awareness' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Retención de Video (VTR)</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={retencionVideo}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nombre" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Line type="monotone" dataKey="VTR 25%" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="VTR 50%" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="VTR 75%" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="VTR 100%" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awarenessDetalle.slice(0, 6).map((ad, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-3">{ad.anuncio}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gastado:</span>
                      <span className="font-bold">${ad.gastado}</span>
                    </div>
                    {ad.thruplays > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">ThruPlays:</span>
                        <span className="font-bold text-green-600">{ad.thruplays.toLocaleString()}</span>
                      </div>
                    )}
                    {ad.visitasPerfil && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Visitas Perfil:</span>
                        <span className="font-bold text-purple-600">{ad.visitasPerfil.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Alcance:</span>
                      <span className="font-bold">{ad.alcance.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">VTR 100%:</span>
                      <span className="font-bold text-blue-600">
                        {((ad.vtr100 / ad.visualizaciones) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'creativos' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Comparación de Creativos</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={creativosVenta}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="creativo" angle={-45} textAnchor="end" height={100} />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="compras" fill="#10b981" name="Compras" />
                  <Bar yAxisId="right" dataKey="costo" fill="#f59e0b" name="Costo/Compra" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🏆 Mejores Creativos</h3>
                <div className="space-y-4">
                  {creativosVenta.slice(0, 3).map((c, idx) => (
                    <div key={idx} className="border-l-4 border-green-500 pl-4 py-2">
                      <p className="font-bold text-gray-800">{c.creativo}</p>
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="text-gray-600">{c.compras} compras</span>
                        <span className="text-green-600 font-bold">${c.costo.toFixed(2)}/compra</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Insights de Creativos</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-bold text-blue-800">Mejor Costo/Compra</p>
                    <p className="text-gray-700 mt-1">"Recuerda tu capacidad" con $2.02 por compra</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-800">Mayor Volumen</p>
                    <p className="text-gray-700 mt-1">"Recupera tu poder" con 25 compras totales</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-800">Formato Ganador</p>
                    <p className="text-gray-700 mt-1">Videos superan a imágenes en conversión</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'audiencias' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rendimiento por Audiencia</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={audienciasData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="audiencia" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="compras" fill="#3b82f6" name="Compras" />
                  <Bar yAxisId="right" dataKey="costo" fill="#ef4444" name="Costo/Compra" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Desglose de Audiencias</h3>
                <div className="space-y-4">
                  {audienciasData.map((aud, idx) => (
                    <div key={idx} className="border-b pb-4">
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-gray-800">{aud.audiencia}</p>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                          {aud.compras} compras
                        </span>
                      </div>
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>Inversión: ${aud.gastado.toFixed(2)}</span>
                        <span>CPP: ${aud.costo > 0 ? aud.costo.toFixed(2) : 'N/A'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Temperatura de Audiencias</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={temperaturaData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ tipo, compras }) => `${tipo}: ${compras}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="compras"
                    >
                      {temperaturaData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#f59e0b', '#ef4444', '#3b82f6'][index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'conclusiones' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 Conclusiones y Recomendaciones</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-lg text-green-700 mb-2">✅ Mejores Desempeños</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>"Recuerda tu capacidad"</strong> tiene el mejor costo por compra ($2.02), aunque con bajo volumen (2 compras).</li>
                  <li><strong>"Si eres como yo acelerada"</strong> muestra el mejor balance: $5.45/compra con 14 conversiones y tasa de conversión del 31.11%.</li>
                  <li><strong>"Recupera tu poder"</strong> genera más volumen (25 compras) con costo razonable ($7.96/compra).</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-lg text-blue-700 mb-2">📹 Campañas de Video</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>Los videos de <strong>"Sonidos Vibraciones"</strong> generaron 140,613 ThruPlays con solo $111.61, a un costo de $0.00079/ThruPlay.</li>
                  <li>La retención promedio es excelente: 10.6% VTR 25%, 5.6% VTR 50%, 3.5% VTR 75%, 2.4% VTR 100%.</li>
                  <li>La campaña de <strong>Visita Perfil</strong> logró 4,055 visitas con $94.78 ($0.023/visita).</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-lg text-purple-700 mb-2">🎯 Audiencias</h4>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Engagers IG/FB</strong> es la audiencia más efectiva: 49 compras con $6.77/compra (94% de las ventas).</li>
                  <li><strong>Remarketing</strong> tiene buen potencial con tasa de conversión del 33.33%, pero bajo volumen.</li>
                  <li>Audiencias <strong>TIBIO (Warm)</strong> superan ampliamente a CALIENTE: 49 vs 2 compras.</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-bold text-lg text-yellow-700 mb-2">⚠️ Áreas de Oportunidad</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>La tasa general de conversión es 18.8% (276 pagos → 52 compras). Optimizar checkout puede duplicar resultados.</li>
                  <li><strong>Escala geográfica (PE MX ARG)</strong> tiene el peor rendimiento: $23.24/compra. Revisar segmentación.</li>
                  <li>Imagen estática funcionó peor que video: $8.22 vs $5.45-$7.33 por compra.</li>
                  <li>Remarketing tiene muy bajo presupuesto ($28.67) considerando su alta conversión (33%).</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-lg text-red-700 mb-2">🚀 Recomendaciones Estratégicas</h4>
                <ol className="list-decimal list-inside text-gray-700 space-y-3">
                  <li>
                    <strong>Escalar "Si eres acelerada":</strong> Tiene el mejor balance eficiencia/volumen. 
                    Aumentar presupuesto 50-100% manteniendo el mismo setup.
                  </li>
                  <li>
                    <strong>Aumentar presupuesto de Remarketing:</strong> Con 33% de conversión, invertir 5-10x más ($150-300) 
                    puede generar 10-20 compras adicionales.
                  </li>
                  <li>
                    <strong>Optimizar funnel de checkout:</strong> 224 pagos perdidos = $1,600-2,000 en ventas potenciales. 
                    A/B test simplificar proceso, agregar urgencia, mostrar garantías.
                  </li>
                  <li>
                    <strong>Pausar o reoptimizar v.4 Geo Escala:</strong> $23.24/compra es 3-4x más caro. 
                    Si continuar, testear otros países o creativos localizados.
                  </li>
                  <li>
                    <strong>Aprovechar momentum de awareness:</strong> 1.4M visualizaciones con excelente retención. 
                    Crear secuencias de retargeting basadas en VTR 50%+.
                  </li>
                  <li>
                    <strong>Video over imagen:</strong> Todos los creativos top son videos. Eliminar imágenes estáticas 
                    o testear carruseles con múltiples beneficios.
                  </li>
                  <li>
                    <strong>Crear más variantes de "Recuerda tu capacidad":</strong> Tiene mejor CPA ($2.02) pero bajo volumen. 
                    Testear 3-5 variantes del mismo concepto.
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-lg text-gray-800 mb-4">📊 Métricas Clave del Período</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">ROAS Estimado</p>
                    <p className="text-3xl font-bold text-purple-600">0.72x</p>
                    <p className="text-xs text-gray-500">Pagos/Inversión</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Conv. Rate</p>
                    <p className="text-3xl font-bold text-green-600">18.8%</p>
                    <p className="text-xs text-gray-500">Pagos → Compras</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">CPM Promedio</p>
                    <p className="text-3xl font-bold text-blue-600">$6.53</p>
                    <p className="text-xs text-gray-500">Ventas</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Mejor Conv%</p>
                    <p className="text-3xl font-bold text-orange-600">33.3%</p>
                    <p className="text-xs text-gray-500">Remarketing</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-3">🎯 Plan de Acción Inmediato (Próximos 30 días)</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Semana 1-2:</strong> Incrementar presupuesto de remarketing a $200. Duplicar inversión en "Si eres acelerada".</p>
                  <p><strong>Semana 2-3:</strong> Implementar mejoras en checkout. A/B test con 2 variantes.</p>
                  <p><strong>Semana 3-4:</strong> Lanzar 3 nuevas variantes de "Recuerda tu capacidad". Crear audiencias custom de VTR 75%+.</p>
                  <p><strong>Continuo:</strong> Monitorear tasa de conversión diaria. Meta: aumentar de 18.8% a 25%+.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RitualesCalmaReport;