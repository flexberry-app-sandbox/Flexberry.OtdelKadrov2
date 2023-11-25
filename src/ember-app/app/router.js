import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otdel-kadrov-2-график-отпуск-l');
  this.route('i-i-s-otdel-kadrov-2-график-отпуск-e',
  { path: 'i-i-s-otdel-kadrov-2-график-отпуск-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-график-отпуск-e.new',
  { path: 'i-i-s-otdel-kadrov-2-график-отпуск-e/new' });
  this.route('i-i-s-otdel-kadrov-2-должность-l');
  this.route('i-i-s-otdel-kadrov-2-должность-e',
  { path: 'i-i-s-otdel-kadrov-2-должность-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-должность-e.new',
  { path: 'i-i-s-otdel-kadrov-2-должность-e/new' });
  this.route('i-i-s-otdel-kadrov-2-отдел-кадров-l');
  this.route('i-i-s-otdel-kadrov-2-отдел-кадров-e',
  { path: 'i-i-s-otdel-kadrov-2-отдел-кадров-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-отдел-кадров-e.new',
  { path: 'i-i-s-otdel-kadrov-2-отдел-кадров-e/new' });
  this.route('i-i-s-otdel-kadrov-2-приказ-о-приеме-l');
  this.route('i-i-s-otdel-kadrov-2-приказ-о-приеме-e',
  { path: 'i-i-s-otdel-kadrov-2-приказ-о-приеме-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-приказ-о-приеме-e.new',
  { path: 'i-i-s-otdel-kadrov-2-приказ-о-приеме-e/new' });
  this.route('i-i-s-otdel-kadrov-2-сост-штат-рас-l');
  this.route('i-i-s-otdel-kadrov-2-сост-штат-рас-e',
  { path: 'i-i-s-otdel-kadrov-2-сост-штат-рас-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-сост-штат-рас-e.new',
  { path: 'i-i-s-otdel-kadrov-2-сост-штат-рас-e/new' });
  this.route('i-i-s-otdel-kadrov-2-сотрудники-l');
  this.route('i-i-s-otdel-kadrov-2-сотрудники-e',
  { path: 'i-i-s-otdel-kadrov-2-сотрудники-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-сотрудники-e.new',
  { path: 'i-i-s-otdel-kadrov-2-сотрудники-e/new' });
  this.route('i-i-s-otdel-kadrov-2-таб-уч-р-в-l');
  this.route('i-i-s-otdel-kadrov-2-таб-уч-р-в-e',
  { path: 'i-i-s-otdel-kadrov-2-таб-уч-р-в-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-таб-уч-р-в-e.new',
  { path: 'i-i-s-otdel-kadrov-2-таб-уч-р-в-e/new' });
  this.route('i-i-s-otdel-kadrov-2-табл-часть-г-о-l');
  this.route('i-i-s-otdel-kadrov-2-табл-часть-г-о-e',
  { path: 'i-i-s-otdel-kadrov-2-табл-часть-г-о-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-табл-часть-г-о-e.new',
  { path: 'i-i-s-otdel-kadrov-2-табл-часть-г-о-e/new' });
  this.route('i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l');
  this.route('i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e',
  { path: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.new',
  { path: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e/new' });
  this.route('i-i-s-otdel-kadrov-2-табл-часть-сотруд-l');
  this.route('i-i-s-otdel-kadrov-2-табл-часть-сотруд-e',
  { path: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.new',
  { path: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e/new' });
  this.route('i-i-s-otdel-kadrov-2-табл-часть-т-у-l');
  this.route('i-i-s-otdel-kadrov-2-табл-часть-т-у-e',
  { path: 'i-i-s-otdel-kadrov-2-табл-часть-т-у-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-табл-часть-т-у-e.new',
  { path: 'i-i-s-otdel-kadrov-2-табл-часть-т-у-e/new' });
  this.route('i-i-s-otdel-kadrov-2-увольнение-l');
  this.route('i-i-s-otdel-kadrov-2-увольнение-e',
  { path: 'i-i-s-otdel-kadrov-2-увольнение-e/:id' });
  this.route('i-i-s-otdel-kadrov-2-увольнение-e.new',
  { path: 'i-i-s-otdel-kadrov-2-увольнение-e/new' });
});

export default Router;
