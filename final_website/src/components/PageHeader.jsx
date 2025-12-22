import './PageHeader.css';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className='page-header-textbox'>
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}


