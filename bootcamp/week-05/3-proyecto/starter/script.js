/**
 * 🎯 Dashboard de Análisis de Datos
 * Week 05 - Arrays Avanzados
 *
 * Implementa cada función usando los métodos aprendidos:
 * - flat() y flatMap()
 * - Array.from()
 * - Chaining de métodos
 * - sort() con comparadores
 * - reduce() para transformaciones
 */

// ============================================
// DATOS DE VENTAS
// ============================================

const salesData = [
  {
    id: 'ORD001',
    date: '2024-01-15',
    customer: 'Ana García',
    region: 'North',
    items: [
      { product: 'Laptop', category: 'Electronics', price: 1200, qty: 1 },
      { product: 'Mouse', category: 'Electronics', price: 25, qty: 2 },
    ],
    status: 'completed',
  },
  {
    id: 'ORD002',
    date: '2024-01-18',
    customer: 'Luis Martínez',
    region: 'South',
    items: [
      { product: 'Desk', category: 'Furniture', price: 350, qty: 1 },
      { product: 'Chair', category: 'Furniture', price: 200, qty: 2 },
    ],
    status: 'completed',
  },
  {
    id: 'ORD003',
    date: '2024-02-05',
    customer: 'María López',
    region: 'East',
    items: [
      { product: 'Monitor', category: 'Electronics', price: 400, qty: 2 },
      { product: 'Keyboard', category: 'Electronics', price: 80, qty: 1 },
    ],
    status: 'completed',
  },
  {
    id: 'ORD004',
    date: '2024-02-12',
    customer: 'Carlos Ruiz',
    region: 'West',
    items: [
      { product: 'Laptop', category: 'Electronics', price: 1200, qty: 2 },
    ],
    status: 'pending',
  },
  {
    id: 'ORD005',
    date: '2024-02-20',
    customer: 'Ana García',
    region: 'North',
    items: [
      { product: 'Headphones', category: 'Electronics', price: 150, qty: 3 },
      { product: 'Webcam', category: 'Electronics', price: 75, qty: 1 },
    ],
    status: 'completed',
  },
  {
    id: 'ORD006',
    date: '2024-03-01',
    customer: 'Pedro Sánchez',
    region: 'South',
    items: [
      { product: 'Desk', category: 'Furniture', price: 350, qty: 2 },
      { product: 'Lamp', category: 'Furniture', price: 45, qty: 4 },
    ],
    status: 'completed',
  },
  {
    id: 'ORD007',
    date: '2024-03-10',
    customer: 'Laura Torres',
    region: 'East',
    items: [
      { product: 'Phone', category: 'Electronics', price: 800, qty: 1 },
      { product: 'Case', category: 'Accessories', price: 25, qty: 2 },
    ],
    status: 'completed',
  },
  {
    id: 'ORD008',
    date: '2024-03-15',
    customer: 'Luis Martínez',
    region: 'South',
    items: [{ product: 'Chair', category: 'Furniture', price: 200, qty: 4 }],
    status: 'pending',
  },
  {
    id: 'ORD009',
    date: '2024-03-22',
    customer: 'Diana Flores',
    region: 'North',
    items: [
      { product: 'Monitor', category: 'Electronics', price: 400, qty: 1 },
      { product: 'Mouse', category: 'Electronics', price: 25, qty: 1 },
      { product: 'Keyboard', category: 'Electronics', price: 80, qty: 1 },
    ],
    status: 'completed',
  },
  {
    id: 'ORD010',
    date: '2024-04-02',
    customer: 'Roberto Vega',
    region: 'West',
    items: [
      { product: 'Laptop', category: 'Electronics', price: 1200, qty: 1 },
      { product: 'Bag', category: 'Accessories', price: 50, qty: 1 },
    ],
    status: 'cancelled',
  },
];

// ============================================
// FUNCIÓN 1: Obtener Todos los Items (flatMap)
// ============================================

/**
 * Extrae todos los items de todas las órdenes en un array plano.
 * Cada item debe incluir orderId, date y region de la orden padre.
 *
 * @param {Array} orders - Array de órdenes
 * @returns {Array} - Array plano de items con contexto
 *
 * Ejemplo de item resultante:
 * { orderId: 'ORD001', date: '2024-01-15', region: 'North',
 *   product: 'Laptop', category: 'Electronics', price: 1200, qty: 1 }
 */
const getAllItems = orders => {
  // TODO: Usar flatMap para extraer items agregando orderId, date y region
  return [];
};

// ============================================
// FUNCIÓN 2: Calcular Total por Orden (map + reduce)
// ============================================

/**
 * Calcula el total de cada orden (suma de price * qty de sus items).
 * Retorna un array de objetos con id, customer, date, status y total.
 *
 * @param {Array} orders - Array de órdenes
 * @returns {Array} - Array con totales por orden
 */
const getOrderTotals = orders => {
  // TODO: Usar map y reduce para calcular total de cada orden
  return [];
};

// ============================================
// FUNCIÓN 3: Top N Clientes (chaining + sort)
// ============================================

/**
 * Obtiene los N clientes con mayor total de compras.
 * Solo cuenta órdenes completadas.
 *
 * @param {Array} orders - Array de órdenes
 * @param {number} n - Cantidad de clientes a retornar
 * @returns {Array} - Array de { customer, total, orderCount }
 */
const getTopCustomers = (orders, n = 5) => {
  // TODO: Filtrar completadas → agrupar por cliente → ordenar → tomar N
  return [];
};

// ============================================
// FUNCIÓN 4: Ventas por Región (reduce - groupBy)
// ============================================

/**
 * Agrupa las ventas totales por región.
 * Solo cuenta órdenes completadas.
 *
 * @param {Array} orders - Array de órdenes
 * @returns {Object} - { North: total, South: total, ... }
 */
const getSalesByRegion = orders => {
  // TODO: Filtrar completadas → reduce para agrupar por región
  return {};
};

// ============================================
// FUNCIÓN 5: Ventas por Categoría (flatMap + reduce)
// ============================================

/**
 * Calcula el total vendido en cada categoría de producto.
 * Solo cuenta órdenes completadas.
 *
 * @param {Array} orders - Array de órdenes
 * @returns {Object} - { Electronics: total, Furniture: total, ... }
 */
const getSalesByCategory = orders => {
  // TODO: Filtrar → flatMap items → reduce por categoría
  return {};
};

// ============================================
// FUNCIÓN 6: Productos Más Vendidos (flatMap + reduce + sort)
// ============================================

/**
 * Lista los productos ordenados por cantidad total vendida (qty).
 * Solo cuenta órdenes completadas.
 *
 * @param {Array} orders - Array de órdenes
 * @param {number} limit - Límite de productos a retornar
 * @returns {Array} - Array de { product, totalQty, totalRevenue }
 */
const getTopProducts = (orders, limit = 10) => {
  // TODO: flatMap → reduce para agrupar → ordenar por qty → slice
  return [];
};

// ============================================
// FUNCIÓN 7: Filtrar Órdenes por Fecha (filter + chaining)
// ============================================

/**
 * Filtra órdenes dentro de un rango de fechas.
 *
 * @param {Array} orders - Array de órdenes
 * @param {string} startDate - Fecha inicio (YYYY-MM-DD)
 * @param {string} endDate - Fecha fin (YYYY-MM-DD)
 * @returns {Array} - Órdenes filtradas
 */
const filterOrdersByDate = (orders, startDate, endDate) => {
  // TODO: Filtrar por rango de fechas usando Date()
  return [];
};

// ============================================
// FUNCIÓN 8: Estadísticas Generales (reduce)
// ============================================

/**
 * Calcula estadísticas generales de las órdenes completadas.
 *
 * @param {Array} orders - Array de órdenes
 * @returns {Object} - { totalSales, orderCount, avgPerOrder, maxOrder, minOrder, totalItems }
 */
const getGeneralStats = orders => {
  // TODO: Calcular todas las estadísticas en un reduce o múltiples operaciones
  return {
    totalSales: 0,
    orderCount: 0,
    avgPerOrder: 0,
    maxOrder: 0,
    minOrder: 0,
    totalItems: 0,
  };
};

// ============================================
// FUNCIÓN 9: Tendencia Mensual (groupBy por mes)
// ============================================

/**
 * Agrupa ventas por mes para ver tendencias.
 * Solo cuenta órdenes completadas.
 *
 * @param {Array} orders - Array de órdenes
 * @returns {Array} - Array de { month: 'YYYY-MM', total, orderCount }
 */
const getMonthlyTrend = orders => {
  // TODO: Extraer mes de date → agrupar → convertir a array ordenado
  return [];
};

// ============================================
// FUNCIÓN 10: Generar Reporte Completo (pipeline)
// ============================================

/**
 * Genera un reporte completo combinando todas las funciones.
 *
 * @param {Array} orders - Array de órdenes
 * @returns {Object} - Reporte completo
 */
const generateReport = orders => {
  // TODO: Combinar todas las funciones anteriores
  return {
    generatedAt: new Date().toISOString(),
    stats: getGeneralStats(orders),
    topCustomers: getTopCustomers(orders, 5),
    salesByRegion: getSalesByRegion(orders),
    salesByCategory: getSalesByCategory(orders),
    topProducts: getTopProducts(orders, 5),
    monthlyTrend: getMonthlyTrend(orders),
  };
};

// ============================================
// FUNCIONES DE RENDERIZADO (NO MODIFICAR)
// ============================================

const formatCurrency = amount =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

const renderStats = stats => {
  document.getElementById('total-sales').textContent = formatCurrency(
    stats.totalSales
  );
  document.getElementById('total-orders').textContent = stats.orderCount;
  document.getElementById('avg-order').textContent = formatCurrency(
    stats.avgPerOrder
  );
  document.getElementById('total-items').textContent = stats.totalItems;
};

const renderTopCustomers = customers => {
  const container = document.getElementById('top-customers');
  if (!customers.length) {
    container.innerHTML = '<p class="loading">Sin datos</p>';
    return;
  }
  container.innerHTML = customers
    .map(
      (c, i) => `
    <div class="list-item">
      <span class="rank">${i + 1}</span>
      <span class="name">${c.customer} (${c.orderCount} órdenes)</span>
      <span class="value">${formatCurrency(c.total)}</span>
    </div>
  `
    )
    .join('');
};

const renderSalesByRegion = regionData => {
  const container = document.getElementById('sales-by-region');
  const entries = Object.entries(regionData);
  if (!entries.length) {
    container.innerHTML = '<p class="loading">Sin datos</p>';
    return;
  }
  const max = Math.max(...entries.map(([, v]) => v));
  container.innerHTML = entries
    .sort((a, b) => b[1] - a[1])
    .map(
      ([region, total]) => `
    <div class="list-item">
      <span class="name">${region}</span>
      <span class="value">${formatCurrency(total)}</span>
    </div>
    <div class="progress-bar">
      <div class="fill" style="width: ${(total / max) * 100}%"></div>
    </div>
  `
    )
    .join('');
};

const renderSalesByCategory = categoryData => {
  const container = document.getElementById('sales-by-category');
  const entries = Object.entries(categoryData);
  if (!entries.length) {
    container.innerHTML = '<p class="loading">Sin datos</p>';
    return;
  }
  const max = Math.max(...entries.map(([, v]) => v));
  container.innerHTML = entries
    .sort((a, b) => b[1] - a[1])
    .map(
      ([category, total]) => `
    <div class="list-item">
      <span class="name">${category}</span>
      <span class="value">${formatCurrency(total)}</span>
    </div>
    <div class="progress-bar">
      <div class="fill" style="width: ${(total / max) * 100}%"></div>
    </div>
  `
    )
    .join('');
};

const renderTopProducts = products => {
  const container = document.getElementById('top-products');
  if (!products.length) {
    container.innerHTML = '<p class="loading">Sin datos</p>';
    return;
  }
  container.innerHTML = products
    .map(
      (p, i) => `
    <div class="list-item">
      <span class="rank">${i + 1}</span>
      <span class="name">${p.product} (${p.totalQty} uds)</span>
      <span class="value">${formatCurrency(p.totalRevenue)}</span>
    </div>
  `
    )
    .join('');
};

const renderMonthlyTrend = trendData => {
  const container = document.getElementById('monthly-trend');
  if (!trendData.length) {
    container.innerHTML = '<p class="loading">Sin datos</p>';
    return;
  }
  const max = Math.max(...trendData.map(t => t.total));
  container.innerHTML = trendData
    .map(
      t => `
    <div class="trend-bar" style="height: ${(t.total / max) * 100}%">
      <span class="amount">${formatCurrency(t.total)}</span>
      <span class="label">${t.month}</span>
    </div>
  `
    )
    .join('');
};

const renderRecentOrders = orders => {
  const container = document.getElementById('recent-orders');
  const orderTotals = getOrderTotals(orders);
  const recent = [...orderTotals]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  if (!recent.length) {
    container.innerHTML = '<p class="loading">Sin datos</p>';
    return;
  }

  container.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Fecha</th>
          <th>Cliente</th>
          <th>Total</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        ${recent
          .map(
            o => `
          <tr>
            <td>${o.id}</td>
            <td>${o.date}</td>
            <td>${o.customer}</td>
            <td>${formatCurrency(o.total)}</td>
            <td><span class="status ${o.status}">${o.status}</span></td>
          </tr>
        `
          )
          .join('')}
      </tbody>
    </table>
  `;
};

// ============================================
// INICIALIZACIÓN
// ============================================

const initDashboard = () => {
  console.log('🚀 Inicializando Dashboard...');
  console.log('📊 Datos cargados:', salesData.length, 'órdenes');

  const report = generateReport(salesData);
  console.log('📈 Reporte generado:', report);

  // Renderizar todas las secciones
  renderStats(report.stats);
  renderTopCustomers(report.topCustomers);
  renderSalesByRegion(report.salesByRegion);
  renderSalesByCategory(report.salesByCategory);
  renderTopProducts(report.topProducts);
  renderMonthlyTrend(report.monthlyTrend);
  renderRecentOrders(salesData);

  console.log('✅ Dashboard listo');
};

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initDashboard);
