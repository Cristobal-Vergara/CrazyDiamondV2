import OrderRow from "../molecules/OrderRow";

const OrdersTable = ({ ordenes, onView, onDelete }) => (
  <table className="table table-striped table-hover">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Cliente</th>
        <th>Fecha</th>
        <th>Total</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {ordenes.map(orden => (
        <OrderRow key={orden.id} orden={orden} onView={onView} onDelete={onDelete} />
      ))}
    </tbody>
  </table>
);

export default OrdersTable;
