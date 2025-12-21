// ============================================
// PROYECTO: Sistema de Gestión de Biblioteca
// ARCHIVO STARTER - Completa las clases
// ============================================

// ============================================
// CLASES BASE
// ============================================

/**
 * LibraryItem - Clase base para todos los items de la biblioteca
 * Implementa encapsulación con campos privados
 */
class LibraryItem {
  // TODO: Declara los campos privados
  // #id, #title, #available, #location, #dateAdded

  constructor(title, location) {
    // TODO: Inicializa los campos privados
    // - Genera un ID único con crypto.randomUUID()
    // - El item debe estar disponible por defecto
    // - Guarda la fecha de agregado
  }

  // TODO: Implementa los getters
  get id() {
    // Retorna el ID
  }

  get title() {
    // Retorna el título
  }

  get isAvailable() {
    // Retorna si está disponible
  }

  get location() {
    // Retorna la ubicación
  }

  get dateAdded() {
    // Retorna la fecha de agregado
  }

  // TODO: Implementa el setter con validación
  set location(value) {
    // Valida que no esté vacío
  }

  // TODO: Implementa los métodos
  checkout() {
    // Marca el item como no disponible
    // Retorna objeto con success y message
  }

  checkin() {
    // Marca el item como disponible
    // Retorna objeto con success y message
  }

  // Método abstracto - debe ser sobrescrito
  getInfo() {
    throw new Error('Method getInfo() must be implemented');
  }

  // Método para obtener el tipo de item
  getType() {
    return this.constructor.name;
  }
}

/**
 * Book - Clase para libros
 */
class Book extends LibraryItem {
  // TODO: Declara campos privados adicionales
  // #author, #isbn, #pages, #genre, #publishYear

  constructor(title, location, author, isbn, pages, genre, publishYear) {
    // TODO: Llama al constructor padre y configura propiedades
  }

  // TODO: Implementa getters para las propiedades del libro
  get author() {}
  get isbn() {}
  get pages() {}
  get genre() {}
  get publishYear() {}

  // TODO: Implementa getInfo()
  getInfo() {
    // Retorna un objeto con toda la información del libro
  }
}

/**
 * Magazine - Clase para revistas
 */
class Magazine extends LibraryItem {
  // TODO: Declara campos privados
  // #issueNumber, #publisher, #publicationDate

  constructor(title, location, issueNumber, publisher, publicationDate) {
    // TODO: Implementa el constructor
  }

  // TODO: Implementa getters
  get issueNumber() {}
  get publisher() {}
  get publicationDate() {}

  // TODO: Implementa getInfo()
  getInfo() {}
}

/**
 * MultimediaItem - Clase base para items multimedia
 */
class MultimediaItem extends LibraryItem {
  // TODO: Declara campos privados
  // #format, #duration, #fileSize

  constructor(title, location, format, duration, fileSize) {
    // TODO: Implementa el constructor
  }

  // TODO: Implementa getters
  get format() {}
  get duration() {}
  get fileSize() {}

  // Formatea la duración en HH:MM:SS
  getFormattedDuration() {
    const hours = Math.floor(this.duration / 3600);
    const minutes = Math.floor((this.duration % 3600) / 60);
    const seconds = this.duration % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

/**
 * DVD - Clase para DVDs
 */
class DVD extends MultimediaItem {
  // TODO: Declara campos privados
  // #director, #rating, #subtitles

  constructor(title, location, duration, director, rating, subtitles = []) {
    // TODO: Implementa el constructor (format = 'DVD', fileSize = 0)
  }

  // TODO: Implementa getters
  get director() {}
  get rating() {}
  get subtitles() {}

  // TODO: Implementa getInfo()
  getInfo() {}
}

/**
 * AudioBook - Clase para audiolibros
 */
class AudioBook extends MultimediaItem {
  // TODO: Declara campos privados
  // #author, #narrator, #chapters

  constructor(title, location, duration, fileSize, author, narrator, chapters) {
    // TODO: Implementa el constructor (format = 'MP3')
  }

  // TODO: Implementa getters
  get author() {}
  get narrator() {}
  get chapters() {}

  // TODO: Implementa getInfo()
  getInfo() {}
}

// ============================================
// CLASES DE PERSONAS
// ============================================

/**
 * Person - Clase base para personas
 */
class Person {
  // TODO: Declara campos privados
  // #id, #name, #email, #registrationDate

  constructor(name, email) {
    // TODO: Valida el email y configura propiedades
  }

  // TODO: Implementa getters
  get id() {}
  get name() {}
  get email() {}
  get registrationDate() {}

  // TODO: Implementa setter con validación
  set email(value) {
    // Valida formato de email
  }

  // Método de validación de email
  static isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

/**
 * Member - Miembro de la biblioteca
 */
class Member extends Person {
  // TODO: Declara campos privados
  // #borrowedItems, #borrowingHistory, #fines, #membershipType, #maxItems

  static #MEMBERSHIP_LIMITS = {
    standard: 3,
    premium: 10,
    student: 5,
  };

  constructor(name, email, membershipType = 'standard') {
    // TODO: Implementa el constructor
  }

  // TODO: Implementa getters
  get borrowedItems() {}
  get borrowingHistory() {}
  get fines() {}
  get totalFines() {}
  get membershipType() {}
  get canBorrow() {}

  // TODO: Implementa métodos
  borrowItem(item) {
    // Verifica límites y disponibilidad
    // Agrega a borrowedItems
    // Retorna objeto con success y message
  }

  returnItem(itemId) {
    // Busca el item en borrowedItems
    // Lo mueve al historial
    // Retorna objeto con success y message
  }

  addFine(amount, reason) {
    // Agrega una multa
  }

  payFine(fineId) {
    // Marca la multa como pagada
  }

  getInfo() {
    // Retorna información del miembro
  }
}

/**
 * Librarian - Bibliotecario (empleado)
 */
class Librarian extends Person {
  // TODO: Declara campos privados
  // #employeeId, #department, #hireDate

  constructor(name, email, department) {
    // TODO: Implementa el constructor
  }

  // TODO: Implementa getters
  get employeeId() {}
  get department() {}
  get hireDate() {}

  getInfo() {
    return {
      id: this.id,
      employeeId: this.employeeId,
      name: this.name,
      email: this.email,
      department: this.department,
      hireDate: this.hireDate,
    };
  }
}

// ============================================
// CLASE LOAN (PRÉSTAMO)
// ============================================

/**
 * Loan - Gestiona los préstamos
 */
class Loan {
  // TODO: Declara campos privados
  // #id, #item, #member, #loanDate, #dueDate, #returnDate, #fine

  static #LOAN_DAYS = {
    Book: 14,
    Magazine: 7,
    DVD: 3,
    AudioBook: 7,
  };

  static #FINE_PER_DAY = 0.5;

  constructor(item, member) {
    // TODO: Implementa el constructor
    // - Genera ID único
    // - Guarda item y member
    // - Establece loanDate como hoy
    // - Calcula dueDate según el tipo de item
    // - returnDate y fine inician como null
  }

  // TODO: Implementa getters
  get id() {}
  get item() {}
  get member() {}
  get loanDate() {}
  get dueDate() {}
  get returnDate() {}
  get fine() {}
  get isActive() {}

  get isOverdue() {
    // Verifica si está vencido
    if (this.returnDate) return false;
    return new Date() > this.dueDate;
  }

  get daysOverdue() {
    // Calcula días de retraso
    if (!this.isOverdue) return 0;
    const today = new Date();
    const diffTime = today - this.dueDate;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // TODO: Implementa métodos
  calculateFine() {
    // Calcula la multa basada en días de retraso
  }

  complete() {
    // Registra la devolución
    // Calcula multa si aplica
    // Retorna objeto con success, message y fine
  }

  getInfo() {
    return {
      id: this.id,
      item: this.item.getInfo(),
      member: { id: this.member.id, name: this.member.name },
      loanDate: this.loanDate,
      dueDate: this.dueDate,
      returnDate: this.returnDate,
      isOverdue: this.isOverdue,
      daysOverdue: this.daysOverdue,
      fine: this.fine,
    };
  }

  // Método estático para obtener días de préstamo por tipo
  static getLoanDays(itemType) {
    return Loan.#LOAN_DAYS[itemType] || 7;
  }
}

// ============================================
// CLASE LIBRARY (CONTROLADOR PRINCIPAL)
// ============================================

/**
 * Library - Sistema principal de la biblioteca
 */
class Library {
  // TODO: Declara campos privados
  // #name, #items, #members, #librarians, #loans, #completedLoans

  constructor(name) {
    // TODO: Inicializa todos los arrays vacíos
  }

  // TODO: Implementa getters
  get name() {}
  get items() {}
  get members() {}
  get loans() {}

  // ============================================
  // GESTIÓN DE CATÁLOGO
  // ============================================

  addItem(item) {
    // TODO: Valida que sea un LibraryItem
    // Agrega al catálogo
  }

  removeItem(itemId) {
    // TODO: Busca y elimina el item
    // Retorna objeto con success y message
  }

  findItemById(id) {
    // TODO: Busca item por ID
  }

  searchItems(query) {
    // TODO: Busca por título (case insensitive)
  }

  filterByType(type) {
    // TODO: Filtra items por tipo (Book, Magazine, etc.)
  }

  filterByGenre(genre) {
    // TODO: Filtra libros por género
  }

  getAvailableItems() {
    // TODO: Retorna solo items disponibles
  }

  getBorrowedItems() {
    // TODO: Retorna items prestados
  }

  // ============================================
  // GESTIÓN DE MIEMBROS
  // ============================================

  registerMember(member) {
    // TODO: Valida que sea un Member
    // Agrega al array de miembros
  }

  removeMember(memberId) {
    // TODO: Elimina un miembro (verificar que no tenga préstamos activos)
  }

  findMemberById(id) {
    // TODO: Busca miembro por ID
  }

  searchMembers(query) {
    // TODO: Busca por nombre o email
  }

  // ============================================
  // GESTIÓN DE BIBLIOTECARIOS
  // ============================================

  addLibrarian(librarian) {
    // TODO: Agrega un bibliotecario
  }

  // ============================================
  // GESTIÓN DE PRÉSTAMOS
  // ============================================

  checkoutItem(itemId, memberId) {
    // TODO: Realiza un préstamo
    // 1. Busca item y member
    // 2. Valida disponibilidad
    // 3. Valida que el member pueda pedir prestado
    // 4. Crea el Loan
    // 5. Actualiza estados
    // Retorna objeto con success, message y loan
  }

  returnItem(loanId) {
    // TODO: Procesa la devolución
    // 1. Busca el loan
    // 2. Completa el loan
    // 3. Actualiza el item
    // 4. Si hay multa, agregar al member
    // Retorna objeto con success, message y fine
  }

  getActiveLoans() {
    // TODO: Retorna préstamos activos
  }

  getOverdueLoans() {
    // TODO: Retorna préstamos vencidos
  }

  getMemberLoans(memberId) {
    // TODO: Retorna préstamos de un miembro
  }

  // ============================================
  // ESTADÍSTICAS
  // ============================================

  getStatistics() {
    // TODO: Retorna estadísticas de la biblioteca
    return {
      totalItems: 0,
      availableItems: 0,
      borrowedItems: 0,
      totalMembers: 0,
      activeLoans: 0,
      overdueLoans: 0,
      totalFines: 0,
      itemsByType: {},
    };
  }
}

// ============================================
// INTERFAZ DE USUARIO (UI)
// ============================================

/**
 * LibraryUI - Maneja la interfaz de usuario
 */
class LibraryUI {
  #library;
  #currentTab;

  constructor(library) {
    this.#library = library;
    this.#currentTab = 'catalog';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadSampleData();
    this.render();
  }

  setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        this.switchTab(e.target.dataset.tab);
      });
    });

    // Modal close buttons
    document.querySelectorAll('.close-btn, .cancel-btn').forEach(btn => {
      btn.addEventListener('click', () => this.closeAllModals());
    });

    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal) this.closeAllModals();
      });
    });

    // Add item button
    document.getElementById('add-item-btn')?.addEventListener('click', () => {
      this.openModal('add-item-modal');
    });

    // Add member button
    document.getElementById('add-member-btn')?.addEventListener('click', () => {
      this.openModal('add-member-modal');
    });

    // New loan button
    document.getElementById('new-loan-btn')?.addEventListener('click', () => {
      this.populateLoanForm();
      this.openModal('new-loan-modal');
    });

    // Form submissions
    document.getElementById('add-item-form')?.addEventListener('submit', e => {
      e.preventDefault();
      this.handleAddItem(e.target);
    });

    document
      .getElementById('add-member-form')
      ?.addEventListener('submit', e => {
        e.preventDefault();
        this.handleAddMember(e.target);
      });

    document.getElementById('new-loan-form')?.addEventListener('submit', e => {
      e.preventDefault();
      this.handleNewLoan(e.target);
    });

    // Search and filters
    document.getElementById('search-input')?.addEventListener('input', e => {
      this.renderCatalog(e.target.value);
    });

    document.getElementById('filter-type')?.addEventListener('change', () => {
      this.renderCatalog();
    });

    document
      .getElementById('filter-availability')
      ?.addEventListener('change', () => {
        this.renderCatalog();
      });

    // Item type change for dynamic form fields
    document.getElementById('item-type')?.addEventListener('change', e => {
      this.updateDynamicFields(e.target.value);
    });

    // Loan item change for due date calculation
    document.getElementById('loan-item')?.addEventListener('change', e => {
      this.updateLoanInfo(e.target.value);
    });

    // Refresh stats
    document
      .getElementById('refresh-stats-btn')
      ?.addEventListener('click', () => {
        this.renderStats();
      });

    // Show overdue
    document
      .getElementById('show-overdue-btn')
      ?.addEventListener('click', () => {
        this.showOverdueLoans();
      });
  }

  // ============================================
  // TAB MANAGEMENT
  // ============================================

  switchTab(tabId) {
    this.#currentTab = tabId;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Update tab panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === tabId);
    });

    // Render content
    this.render();
  }

  // ============================================
  // RENDERING
  // ============================================

  render() {
    switch (this.#currentTab) {
      case 'catalog':
        this.renderCatalog();
        break;
      case 'members':
        this.renderMembers();
        break;
      case 'loans':
        this.renderLoans();
        break;
      case 'stats':
        this.renderStats();
        break;
    }
  }

  renderCatalog(searchQuery = '') {
    const container = document.getElementById('catalog-list');
    if (!container) return;

    const typeFilter = document.getElementById('filter-type')?.value || 'all';
    const availabilityFilter =
      document.getElementById('filter-availability')?.value || 'all';

    let items = [...this.#library.items];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => {
        const info = item.getInfo();
        return (
          item.title.toLowerCase().includes(query) ||
          (info.author && info.author.toLowerCase().includes(query))
        );
      });
    }

    // Apply type filter
    if (typeFilter !== 'all') {
      items = items.filter(item => item.getType() === typeFilter);
    }

    // Apply availability filter
    if (availabilityFilter === 'available') {
      items = items.filter(item => item.isAvailable);
    } else if (availabilityFilter === 'borrowed') {
      items = items.filter(item => !item.isAvailable);
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📚</div>
          <p class="empty-state-text">No se encontraron items</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => this.createItemCard(item)).join('');

    // Add event listeners to cards
    container.querySelectorAll('.item-card').forEach(card => {
      const itemId = card.dataset.id;

      card.querySelector('.view-details-btn')?.addEventListener('click', () => {
        this.showItemDetails(itemId);
      });

      card.querySelector('.checkout-btn')?.addEventListener('click', () => {
        this.quickCheckout(itemId);
      });

      card.querySelector('.checkin-btn')?.addEventListener('click', () => {
        this.quickCheckin(itemId);
      });
    });
  }

  createItemCard(item) {
    const info = item.getInfo();
    const type = item.getType().toLowerCase();

    return `
      <div class="item-card" data-id="${item.id}">
        <div class="item-card-header">
          <span class="item-type ${type}">${item.getType()}</span>
          <span class="availability-badge ${
            item.isAvailable ? 'available' : 'borrowed'
          }">
            ${item.isAvailable ? '✓ Disponible' : '✗ Prestado'}
          </span>
        </div>
        <h3 class="item-title">${item.title}</h3>
        ${info.author ? `<p class="item-author">por ${info.author}</p>` : ''}
        <div class="item-details">
          <p>📍 ${item.location}</p>
          ${info.genre ? `<p>📖 ${info.genre}</p>` : ''}
          ${info.director ? `<p>🎬 Dir: ${info.director}</p>` : ''}
          ${info.publisher ? `<p>📰 ${info.publisher}</p>` : ''}
        </div>
        <div class="item-actions">
          <button class="btn btn-secondary btn-small view-details-btn">Ver Detalles</button>
          ${
            item.isAvailable
              ? '<button class="btn btn-primary btn-small checkout-btn">Prestar</button>'
              : '<button class="btn btn-success btn-small checkin-btn">Devolver</button>'
          }
        </div>
      </div>
    `;
  }

  renderMembers() {
    const container = document.getElementById('members-list');
    if (!container) return;

    const members = this.#library.members;

    if (members.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">👥</div>
          <p class="empty-state-text">No hay miembros registrados</p>
        </div>
      `;
      return;
    }

    container.innerHTML = members
      .map(member => this.createMemberCard(member))
      .join('');

    // Add event listeners
    container.querySelectorAll('.member-card').forEach(card => {
      card.addEventListener('click', () => {
        this.showMemberDetails(card.dataset.id);
      });
    });
  }

  createMemberCard(member) {
    const initials = member.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
    const borrowedCount = member.borrowedItems.length;
    const finesCount = member.fines.filter(f => !f.paid).length;

    return `
      <div class="member-card" data-id="${member.id}">
        <div class="member-avatar">${initials}</div>
        <h3 class="member-name">${member.name}</h3>
        <p class="member-email">${member.email}</p>
        <div class="member-stats">
          <div class="member-stat">
            <div class="member-stat-value">${borrowedCount}</div>
            <div class="member-stat-label">Préstamos</div>
          </div>
          <div class="member-stat">
            <div class="member-stat-value">${finesCount}</div>
            <div class="member-stat-label">Multas</div>
          </div>
        </div>
        <span class="membership-badge ${member.membershipType}">${member.membershipType}</span>
      </div>
    `;
  }

  renderLoans() {
    this.renderActiveLoans();
    this.renderLoanHistory();
  }

  renderActiveLoans() {
    const container = document.getElementById('active-loans');
    if (!container) return;

    const activeLoans = this.#library.getActiveLoans();

    if (activeLoans.length === 0) {
      container.innerHTML =
        '<p class="empty-state-text">No hay préstamos activos</p>';
      return;
    }

    container.innerHTML = activeLoans
      .map(loan => this.createLoanCard(loan))
      .join('');

    // Add return button listeners
    container.querySelectorAll('.return-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.handleReturn(btn.dataset.loanId);
      });
    });
  }

  renderLoanHistory() {
    const container = document.getElementById('loan-history');
    if (!container) return;

    // Get completed loans (those with returnDate)
    const history = this.#library.loans.filter(l => l.returnDate);

    if (history.length === 0) {
      container.innerHTML =
        '<p class="empty-state-text">No hay historial de préstamos</p>';
      return;
    }

    container.innerHTML = history
      .slice(-10)
      .reverse()
      .map(loan => this.createLoanCard(loan, true))
      .join('');
  }

  createLoanCard(loan, isHistory = false) {
    const statusClass = loan.returnDate
      ? 'returned'
      : loan.isOverdue
      ? 'overdue'
      : 'active';
    const statusText = loan.returnDate
      ? 'Devuelto'
      : loan.isOverdue
      ? 'Vencido'
      : 'Activo';

    return `
      <div class="loan-card ${
        loan.isOverdue && !loan.returnDate ? 'overdue' : ''
      }">
        <div class="loan-header">
          <span class="loan-item-title">${loan.item.title}</span>
          <span class="loan-status ${statusClass}">${statusText}</span>
        </div>
        <div class="loan-info">
          <p><strong>Miembro:</strong> ${loan.member.name}</p>
          <p><strong>Fecha préstamo:</strong> ${loan.loanDate.toLocaleDateString()}</p>
          <p><strong>Fecha devolución:</strong> ${loan.dueDate.toLocaleDateString()}</p>
          ${
            loan.isOverdue && !loan.returnDate
              ? `<p><strong>Días de retraso:</strong> ${loan.daysOverdue}</p>`
              : ''
          }
          ${
            loan.fine
              ? `<p><strong>Multa:</strong> $${loan.fine.toFixed(2)}</p>`
              : ''
          }
        </div>
        ${
          !isHistory && !loan.returnDate
            ? `
          <div class="loan-actions">
            <button class="btn btn-success btn-small return-btn" data-loan-id="${loan.id}">
              Registrar Devolución
            </button>
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  renderStats() {
    const stats = this.#library.getStatistics();

    document.getElementById('total-items').textContent = stats.totalItems;
    document.getElementById('available-items').textContent =
      stats.availableItems;
    document.getElementById('total-members').textContent = stats.totalMembers;
    document.getElementById('active-loans-count').textContent =
      stats.activeLoans;
    document.getElementById('overdue-loans').textContent = stats.overdueLoans;
    document.getElementById(
      'total-fines'
    ).textContent = `$${stats.totalFines.toFixed(2)}`;

    // Type breakdown
    const breakdownContainer = document.getElementById('type-breakdown');
    if (breakdownContainer) {
      breakdownContainer.innerHTML = Object.entries(stats.itemsByType)
        .map(
          ([type, count]) => `
          <div class="breakdown-item">
            <span class="breakdown-type">${type}</span>
            <span class="breakdown-count">${count}</span>
          </div>
        `
        )
        .join('');
    }
  }

  // ============================================
  // MODAL MANAGEMENT
  // ============================================

  openModal(modalId) {
    document.getElementById(modalId)?.classList.add('active');
  }

  closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.classList.remove('active');
    });
  }

  // ============================================
  // FORM HANDLERS
  // ============================================

  updateDynamicFields(type) {
    const container = document.getElementById('dynamic-fields');
    if (!container) return;

    let fields = '';

    switch (type) {
      case 'Book':
        fields = `
          <div class="form-group">
            <label for="book-author">Autor</label>
            <input type="text" id="book-author" required>
          </div>
          <div class="form-group">
            <label for="book-isbn">ISBN</label>
            <input type="text" id="book-isbn" required>
          </div>
          <div class="form-group">
            <label for="book-pages">Páginas</label>
            <input type="number" id="book-pages" min="1" required>
          </div>
          <div class="form-group">
            <label for="book-genre">Género</label>
            <input type="text" id="book-genre" required>
          </div>
          <div class="form-group">
            <label for="book-year">Año de publicación</label>
            <input type="number" id="book-year" min="1000" max="2030" required>
          </div>
        `;
        break;

      case 'Magazine':
        fields = `
          <div class="form-group">
            <label for="mag-issue">Número de edición</label>
            <input type="number" id="mag-issue" min="1" required>
          </div>
          <div class="form-group">
            <label for="mag-publisher">Editorial</label>
            <input type="text" id="mag-publisher" required>
          </div>
          <div class="form-group">
            <label for="mag-date">Fecha de publicación</label>
            <input type="date" id="mag-date" required>
          </div>
        `;
        break;

      case 'DVD':
        fields = `
          <div class="form-group">
            <label for="dvd-director">Director</label>
            <input type="text" id="dvd-director" required>
          </div>
          <div class="form-group">
            <label for="dvd-duration">Duración (minutos)</label>
            <input type="number" id="dvd-duration" min="1" required>
          </div>
          <div class="form-group">
            <label for="dvd-rating">Clasificación</label>
            <select id="dvd-rating" required>
              <option value="G">G - General</option>
              <option value="PG">PG - Guía parental</option>
              <option value="PG-13">PG-13 - Mayores de 13</option>
              <option value="R">R - Restringido</option>
            </select>
          </div>
        `;
        break;

      case 'AudioBook':
        fields = `
          <div class="form-group">
            <label for="audio-author">Autor</label>
            <input type="text" id="audio-author" required>
          </div>
          <div class="form-group">
            <label for="audio-narrator">Narrador</label>
            <input type="text" id="audio-narrator" required>
          </div>
          <div class="form-group">
            <label for="audio-duration">Duración (minutos)</label>
            <input type="number" id="audio-duration" min="1" required>
          </div>
          <div class="form-group">
            <label for="audio-chapters">Número de capítulos</label>
            <input type="number" id="audio-chapters" min="1" required>
          </div>
        `;
        break;
    }

    container.innerHTML = fields;
  }

  handleAddItem(form) {
    const type = document.getElementById('item-type').value;
    const title = document.getElementById('item-title').value;
    const location = document.getElementById('item-location').value;

    let item;

    try {
      switch (type) {
        case 'Book':
          item = new Book(
            title,
            location,
            document.getElementById('book-author').value,
            document.getElementById('book-isbn').value,
            parseInt(document.getElementById('book-pages').value),
            document.getElementById('book-genre').value,
            parseInt(document.getElementById('book-year').value)
          );
          break;

        case 'Magazine':
          item = new Magazine(
            title,
            location,
            parseInt(document.getElementById('mag-issue').value),
            document.getElementById('mag-publisher').value,
            new Date(document.getElementById('mag-date').value)
          );
          break;

        case 'DVD':
          item = new DVD(
            title,
            location,
            parseInt(document.getElementById('dvd-duration').value) * 60,
            document.getElementById('dvd-director').value,
            document.getElementById('dvd-rating').value
          );
          break;

        case 'AudioBook':
          item = new AudioBook(
            title,
            location,
            parseInt(document.getElementById('audio-duration').value) * 60,
            50, // Default file size in MB
            document.getElementById('audio-author').value,
            document.getElementById('audio-narrator').value,
            parseInt(document.getElementById('audio-chapters').value)
          );
          break;
      }

      this.#library.addItem(item);
      this.showToast('Item agregado correctamente', 'success');
      this.closeAllModals();
      form.reset();
      document.getElementById('dynamic-fields').innerHTML = '';
      this.renderCatalog();
    } catch (error) {
      this.showToast(error.message, 'error');
    }
  }

  handleAddMember(form) {
    const name = document.getElementById('member-name').value;
    const email = document.getElementById('member-email').value;
    const membershipType = document.getElementById('membership-type').value;

    try {
      const member = new Member(name, email, membershipType);
      this.#library.registerMember(member);
      this.showToast('Miembro registrado correctamente', 'success');
      this.closeAllModals();
      form.reset();
      this.renderMembers();
    } catch (error) {
      this.showToast(error.message, 'error');
    }
  }

  populateLoanForm() {
    // Populate members dropdown
    const memberSelect = document.getElementById('loan-member');
    memberSelect.innerHTML =
      '<option value="">Seleccionar miembro...</option>' +
      this.#library.members
        .map(m => `<option value="${m.id}">${m.name}</option>`)
        .join('');

    // Populate items dropdown (only available)
    const itemSelect = document.getElementById('loan-item');
    itemSelect.innerHTML =
      '<option value="">Seleccionar item...</option>' +
      this.#library
        .getAvailableItems()
        .map(
          i => `<option value="${i.id}">${i.title} (${i.getType()})</option>`
        )
        .join('');

    // Reset loan info
    document.getElementById('loan-days').textContent = '-';
    document.getElementById('due-date').textContent = '-';
  }

  updateLoanInfo(itemId) {
    if (!itemId) {
      document.getElementById('loan-days').textContent = '-';
      document.getElementById('due-date').textContent = '-';
      return;
    }

    const item = this.#library.findItemById(itemId);
    if (!item) return;

    const days = Loan.getLoanDays(item.getType());
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + days);

    document.getElementById('loan-days').textContent = days;
    document.getElementById('due-date').textContent =
      dueDate.toLocaleDateString();
  }

  handleNewLoan(form) {
    const memberId = document.getElementById('loan-member').value;
    const itemId = document.getElementById('loan-item').value;

    const result = this.#library.checkoutItem(itemId, memberId);

    if (result.success) {
      this.showToast(result.message, 'success');
      this.closeAllModals();
      form.reset();
      this.render();
    } else {
      this.showToast(result.error, 'error');
    }
  }

  handleReturn(loanId) {
    const result = this.#library.returnItem(loanId);

    if (result.success) {
      let message = result.message;
      if (result.fine > 0) {
        message += ` Multa aplicada: $${result.fine.toFixed(2)}`;
      }
      this.showToast(message, 'success');
      this.render();
    } else {
      this.showToast(result.error, 'error');
    }
  }

  quickCheckout(itemId) {
    this.populateLoanForm();
    document.getElementById('loan-item').value = itemId;
    this.updateLoanInfo(itemId);
    this.openModal('new-loan-modal');
  }

  quickCheckin(itemId) {
    const loan = this.#library.loans.find(
      l => l.item.id === itemId && !l.returnDate
    );
    if (loan) {
      this.handleReturn(loan.id);
    }
  }

  // ============================================
  // DETAILS MODALS
  // ============================================

  showItemDetails(itemId) {
    const item = this.#library.findItemById(itemId);
    if (!item) return;

    const info = item.getInfo();
    const container = document.getElementById('item-details-content');

    container.innerHTML = `
      <div class="item-details-full">
        <p><strong>Tipo:</strong> ${item.getType()}</p>
        <p><strong>Título:</strong> ${item.title}</p>
        <p><strong>Ubicación:</strong> ${item.location}</p>
        <p><strong>Estado:</strong> ${
          item.isAvailable ? 'Disponible' : 'Prestado'
        }</p>
        ${info.author ? `<p><strong>Autor:</strong> ${info.author}</p>` : ''}
        ${info.isbn ? `<p><strong>ISBN:</strong> ${info.isbn}</p>` : ''}
        ${info.pages ? `<p><strong>Páginas:</strong> ${info.pages}</p>` : ''}
        ${info.genre ? `<p><strong>Género:</strong> ${info.genre}</p>` : ''}
        ${
          info.publishYear
            ? `<p><strong>Año:</strong> ${info.publishYear}</p>`
            : ''
        }
        ${
          info.director
            ? `<p><strong>Director:</strong> ${info.director}</p>`
            : ''
        }
        ${
          info.narrator
            ? `<p><strong>Narrador:</strong> ${info.narrator}</p>`
            : ''
        }
        ${
          info.duration
            ? `<p><strong>Duración:</strong> ${
                item.getFormattedDuration
                  ? item.getFormattedDuration()
                  : info.duration
              }</p>`
            : ''
        }
      </div>
    `;

    this.openModal('item-details-modal');
  }

  showMemberDetails(memberId) {
    const member = this.#library.findMemberById(memberId);
    if (!member) return;

    const container = document.getElementById('member-details-content');
    const loans = this.#library.getMemberLoans(memberId);

    container.innerHTML = `
      <div class="member-details-full">
        <p><strong>Nombre:</strong> ${member.name}</p>
        <p><strong>Email:</strong> ${member.email}</p>
        <p><strong>Membresía:</strong> ${member.membershipType}</p>
        <p><strong>Items prestados:</strong> ${member.borrowedItems.length}</p>
        <p><strong>Multas pendientes:</strong> $${member.totalFines.toFixed(
          2
        )}</p>
        <h4>Préstamos activos:</h4>
        ${
          loans.length > 0
            ? loans.map(l => `<p>- ${l.item.title}</p>`).join('')
            : '<p>Sin préstamos activos</p>'
        }
      </div>
    `;

    this.openModal('member-details-modal');
  }

  showOverdueLoans() {
    const overdue = this.#library.getOverdueLoans();
    if (overdue.length === 0) {
      this.showToast('No hay préstamos vencidos', 'info');
      return;
    }
    this.showToast(`Hay ${overdue.length} préstamos vencidos`, 'warning');
  }

  // ============================================
  // NOTIFICATIONS
  // ============================================

  showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // ============================================
  // SAMPLE DATA
  // ============================================

  loadSampleData() {
    // TODO: Agrega datos de ejemplo para probar la aplicación
    // Agrega al menos:
    // - 5 libros
    // - 2 revistas
    // - 2 DVDs
    // - 2 audiolibros
    // - 5 miembros

    console.log('Carga datos de ejemplo aquí');
  }
}

// ============================================
// INICIALIZACIÓN
// ============================================

// Crear instancia de la biblioteca
const library = new Library('Biblioteca Central');

// Crear instancia de la UI
const ui = new LibraryUI(library);

console.log('🚀 Sistema de Biblioteca iniciado');
