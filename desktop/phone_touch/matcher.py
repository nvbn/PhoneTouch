from pathlib import Path
from imp import load_source
from .types import Spacer


def _get_rules():
    paths = Path(__file__).parent \
        .joinpath('rules') \
        .glob('*.py')
    rules = [load_source(path.name[:-3], str(path))
             for path in paths
             if not path.name.startswith('_')]
    return sorted(rules, key=lambda rule: rule.priority)

_rules = _get_rules()


def get_controls(window):
    for rule in _rules:
        if rule.match(window):
            yield from rule.get_controls(window)
            yield Spacer()
