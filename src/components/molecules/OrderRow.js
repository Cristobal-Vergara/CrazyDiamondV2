const OrderRow = ({ orden, onView, onDelete }) => (
  <tr>
    <td>{orden.id}</td>
    <td>{orden.cliente}</td>
    <td>{orden.fecha}</td>
    <td>${orden.total.toFixed(2)}</td>
    <td>
      <button className="btn btn-sm btn-info me-2" onClick={() => onView(orden)}>Ver</button>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(orden.id)}>Eliminar</button>
    </td>
  </tr>
);

export default OrderRow;
